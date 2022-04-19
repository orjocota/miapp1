import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../index.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { productoId } = useParams();
 

  useEffect(() => {
    getProductsById(productoId).then((items) => {
      setProduct(items);
    }).catch(err  => {
      console.log(err)
  }).finally(() => {
      setLoading(false)
  })

  return (() => {
      setProduct()
  })
  }, [productoId]);

  return (
    <div className="ItemDetailDetalle" >
      { 
          loading ? 
              <h1>Cargando...</h1> :
              productoId ? 
              <ItemDetail {...product}/> :
              <h1>El producto no existe</h1> 
      }
      </div>

  );
};

export default ItemDetailContainer;
