import Item from "../Item/Item";
import "../../index.css";

const ItemList = ({ prod }) => {
  return (
    <>
    <div className="caja_categorias">
        <div className="titulo_categorias">
          Categorias
        </div>
        <div className="cuerpo_categorias">
        <button>Verduras</button>
        <button >Frutas</button>
        <button >Hortalizas</button>
        </div>
      </div> 
      <div className="container">
        {prod.map(vege => <Item key={vege.id} {...vege} />)}
        </div>
    </>
  );
};

export default ItemList;