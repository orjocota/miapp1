import { useEffect, useState } from "react";
import { getVegetales } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [prod1, setProd1] = useState([]);
  const { categoriaId } = useParams();console.log(useParams())

  useEffect(() => {
    getVegetales(categoriaId).then(Productos => {
      setProd1(Productos)
    })
  }, [categoriaId])

  return (
    <>
      <ItemList prod={prod1} />
    </>
  );
};

export default ItemListContainer;
