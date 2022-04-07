import "../../index.css";
const Item = ({ titulo, imagen, detalle, precio }) => {
  return (
    <div className="caja">
      <h2>{titulo}</h2>
      <img src={imagen} alt={titulo} className="tomate" />
      <p>{detalle}</p>
      <p>{precio}</p>
      <button>Ver Detalle</button>
    </div>
  );
};

export default Item;
