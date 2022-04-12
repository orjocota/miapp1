import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../index.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
 
  const {prodId} = useParams();console.log(useParams())

  useEffect(() => {
    getProductsById(prodId).then(item => {
      setProduct(item)
    })
  }, [prodId])

  return (
    <>
      <div className="verduras">DETALLE</div>
      <ItemDetail {...product} />
    </>
  );
};


export default ItemDetailContainer;
