import Item from "../Item/Item";
import "../../index.css";

const ItemList = ({ prod }) => {
  return (
    <>
      <div className="container">
        {prod.map((vege) => (
          <Item key={vege.id} {...vege} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
