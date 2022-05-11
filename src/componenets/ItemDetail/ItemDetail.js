import ItemCount from "../counter/counter";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ id, titulo, categoria, detalle, imagen, precio }) => {
  const { addItem, getQuantityProd } = useContext(CartContext);

  const handleOnAdd = (numero) => {
    const prodObj = {
      id,
      titulo,
      precio,
      imagen,
    };
    addItem({ ...prodObj, quantity: numero });
  };

  return (
    <div className="caja-card-detalle">
      <div className="img-card-detalle">
        <img src={imagen} alt={titulo} />
      </div>

      <div className="info-card-detalle">
        <h2>{titulo}</h2>
        <p className="categoria">
          <span>Categoria: </span> {categoria}
        </p>
        <p className="precio">$ {precio}</p>
        <p className="detalle"> {detalle}</p>
        {false ? (
          <Link className="contador-irCarro" to="/cart">
            Ir al Carrito
          </Link>
        ) : (
          <ItemCount
            initial={getQuantityProd(id)}
            stock={10}
            onAdd={handleOnAdd}
            className="contador"
          />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
