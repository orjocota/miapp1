import { useEffect, useState } from "react";
import { getVegetales } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [prod1, setProd1] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    getVegetales(categoriaId).then(Productos => {
      setProd1(Productos)
    })
  }, [categoriaId])


  const handleClick = () =>{
    console.log('hice click en intemlistcontainer')
  }

  return (
    <div onClick={handleClick}>
      <ItemList prod={prod1} />
    </div>
  );
};

export default ItemListContainer;
