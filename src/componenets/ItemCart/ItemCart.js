import "./ItemCart.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

export const ItemCart = ({ id, precio, titulo, imagen, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="caja_item_cart">
        <div className="caja_inte_cart">
          <img src={imagen} alt={titulo} className="img-cart" />
          <p className="titulo-cart">{titulo}</p>
        </div>
        <div className="caja_secun_cart">
          <p>Cantidad : {quantity}</p>
          <p>Precio : $ {precio}</p>
          <p>Total : $ {precio * quantity}</p>
          <button className="button-item" onClick={() => removeItem(id)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
