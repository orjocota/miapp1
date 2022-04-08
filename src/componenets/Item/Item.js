import "../../index.css";
import ItemCount from "../counter/counter";


const Item = ({ titulo, imagen, detalle, precio }) => {
  const handleOnAdd = (quantity) => {
    console.log(`se Agregaron ${quantity} productos al Carrito`);
  };

  return (
    <div className="caja-card">
      <h2 className="titulo-card">{titulo}</h2>
      <img src={imagen} alt={titulo} className="imagen-card" />
      {/* <p className="detalle-card">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        tempore tenetur aut aperiam blanditiis modi beatae omnis quo nihil quod
        quibusdam iure necessitatibus cum odio quae?
      </p> */}
      <p className="precio-card">{precio}</p>
      <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
      <button className="button-carrito">Add Carrito</button>
      <button className="button-detalle">Ver Detalle</button>
    </div>
  );
};

export default Item;
