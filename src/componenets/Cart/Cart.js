import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { ItemCart } from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import"./Cart.css"

const Cart = () => {

    const { cart } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <h1 className="container-cart">No Existen Productos en el Carrito</h1>
        )
    }

    return (
        <div className="container-cart">
            <h2>Carrito de Compra</h2>
        <div>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            } 
        </div>
        <Link to="/productos" >
            <button className="button">Volver a Productos</button>
        </Link>        
        </div>
        
    )
}

export default Cart