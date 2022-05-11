import "../../index.css";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, imagen, precio, categoria }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="caja-card" onClick={handleClick}>
        <h2 className="titulo-card">{titulo}</h2>
        <img src={imagen} alt={titulo} className="imagen-card" />
        <p className="categori-card">Categoria: {categoria}</p>
        <p className="precio-card">$ {precio}</p>
        <div className="button-detalle">
          <Link to={`/productos/detail/${id}`} className="Link-detalles">
            Ver Detalle
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
