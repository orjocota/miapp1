import { useEffect, useState } from "react";
import { getVegetales } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
  const [prod1, setProd1] = useState([]);
  

  useEffect(() => {
    getVegetales().then(Productos => {
      setProd1(Productos)
    })
  }, [])


  const handleClick = (e) =>{
    e.stopPropagation()
  }

  return (
    <div onClick={handleClick}>
      <ItemList prod={prod1} />
    </div>
  );
};

export default ItemListContainer;
