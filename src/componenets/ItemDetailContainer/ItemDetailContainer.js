import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../index.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(); 
  const {productoId} = useParams();

  useEffect(() => {
    getProductsById(productoId).then(items => {
      setProduct(items)
    })
  }, [productoId])

  return (
    <>
      <div className="verduras">DETALLE</div>
      <ItemDetail {...product} />
    </>
  );
};


export default ItemDetailContainer;