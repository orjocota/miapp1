import './form.css'
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../service/firebase/index'

const Form = () => {

    const [input, setInput] = useState({name: '', phone: '', address: '', mail: '', mailConfirm: '' })
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const { cart, totalCost } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) =>  {
        if (input.mail === input.mailConfirm) {
            console.log('hola')
            setButtonDisabled(false)
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
        
    }

    const createOrder = () => {
        console.log('chau')
        
        setLoading(true)
    
        const objOrder = {
            prodOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            buyer: input,
            total: totalCost(),
            date: new Date
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <>  
                <h1 className="BuyTitle">Gracias por tu compra!</h1>
                <h3 className="Code">Tu c??digo es: {orderId}</h3>
                <p className="Code">Pronto nos contactaremos para coordinar la entrega</p>
            </>
        )
    }

    if (loading) {
        return <h1>Procesando compra</h1>
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1 className='Title'>Tus datos</h1>
            <div className='Form'>
                <div className='Field'>
                    <div className='Inputs'>
                        <label><input placeholder="Nombre y apellido" type='text' onChange={handleChange} name="name" value={input.name || ""}/></label>
                        <label><input placeholder="Email" type='text' onChange={handleChange} name="mail" value={input.mail || ""}/></label>
                        <label><input placeholder="Email" type='text' onChange={handleChange} onBlur={onBlurHandler} name="mailConfirm" value={input.mailConfirm || ""}/></label>
                        <label><input placeholder="Direcci??n de env??o" type='text' onChange={handleChange} name="address" value={input.address || ""}/></label>
                        <label><input placeholder="Tel??fono" type="text" onChange={handleChange} name="phone" value={input.phone || ""}/></label>
                    </div>
                    <div>
                        <button onClick={() => createOrder()} className="Finish" disabled={buttonDisabled}>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form