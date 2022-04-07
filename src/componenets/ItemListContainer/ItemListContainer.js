import { useEffect, useState } from "react";
import { getVegetales } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
  const [vegetal, setVegetal] = useState([])

  useEffect(() => {
      getVegetales().then(vegetales => {
        setVegetal(vegetales)
      })
    },[])
  
  return (
    <>
    <ItemList vegetal = {vegetal}/>
    </>

  )
};

export default ItemListContainer;
