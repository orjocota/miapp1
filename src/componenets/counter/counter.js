import {useState} from 'react'
import "./counterElements.css"
import { Link } from 'react-router-dom';
import"../ItemDetail/ItemDetail.css"

const ItemCount = ({initial, stock, onAdd}) => {
    let [numero, setNumero] = useState(initial);
    

    function aumentar(){
        if (numero < stock) {
            setNumero(numero + 1)
        }else{
            alert("No existen mas Elementos de este Tipo")
        }
    }
    function disminuir(){
        if (numero > initial) {
            setNumero(numero - 1)
        }else{
            alert("No es un Valor Real")
        }
        
    }
    return (
        <>
        <div className='contador'>
        <button onClick={aumentar}>+</button>
        <span>{numero}</span>
        <button onClick={disminuir}>-</button>
        </div>

        <div className='agregar-carro'>
        <button onClick={() => onAdd(numero)}>Agregar al carrito</button>          
        </div>
        <Link className="contador-irCarro" to="/productos">Volver a Productos</Link> 
        
        </>
        
    )
}

export default ItemCount