import ItemCount from "../counter/counter"
import "../../componenets/ItemDetail/ItemDetail.css"

const ItemDetail = ({titulo, categoria, detalle, imagen, precio}) => {
    const handleOnAdd = (quantity) => {
        console.log(`se Agregaron ${quantity} productos al Carrito`);
      }

    return (
        <div className="caja-card-detalle">
          <h2 className="titulo-card">{titulo}</h2>
          <img src={imagen} alt={titulo} className="imagen-card" />
          <p>Categoria: {categoria}</p>
          <p className="precio-card">{precio}</p>
          <p>Detalle: {detalle}</p>
          <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
          <button className="button-carrito">Add Carrito</button>
        </div>
      );

}
export default ItemDetail