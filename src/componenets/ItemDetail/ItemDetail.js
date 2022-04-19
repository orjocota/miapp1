import ItemCount from "../counter/counter";
import "../../componenets/ItemDetail/ItemDetail.css";

const ItemDetail = ({ titulo, categoria, detalle, imagen, precio }) => {
  const handleOnAdd = (quantity) => {
    console.log(`se Agregaron ${quantity} productos al Carrito`);
  };

  return (
    <div className="caja-card-detalle">
      <div className="img-card">        
        <img src={imagen} alt={titulo} />
      </div>

      <div className="info-card-detalle">
      <h2>{titulo}</h2>
        <p className="categoria"><span>Categoria: </span> {categoria}</p>
        <p className="precio-card">{precio}</p>
        <p className="detalle"> {detalle}</p>
        <ItemCount initial={1} stock={10} onAdd={handleOnAdd} className="contador"/>
        <button className="button-carrito">Add Carrito</button>
      </div>
    </div>
  );
};
export default ItemDetail;
