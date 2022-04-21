import ItemCount from "../counter/counter";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({id, titulo, categoria, detalle, imagen, precio, setCart, cart }) => {
  const [quantity, setCuantity] = useState(0);

    const handleOnAdd = (numero) => {

      setCuantity(numero)
      const objProd = {
        id, titulo, precio, quantity
      }
      setCart([...cart,objProd])
      
        
    };
  
  return (
    <div className="caja-card-detalle">
      <div className="img-card-detalle">        
        <img src={imagen} alt={titulo} />
      </div>

      <div className="info-card-detalle">
      <h2>{titulo}</h2>
        <p className="categoria"><span>Categoria: </span> {categoria}</p>
        <p className="precio">{precio}</p>
        <p className="detalle"> {detalle}</p>
        {quantity > 0 ? <Link className="contador-irCarro" to="/cart">Ir al Carrito</Link> : <ItemCount initial={1} stock={10} onAdd={handleOnAdd} className="contador"/>}
      </div>
    </div>
  );
};
export default ItemDetail;
