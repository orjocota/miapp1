import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { firestoreDb } from "../service/firebase";
import { getDoc, doc } from "firebase/firestore";
import "../../index.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { productoId } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, "vegetales", productoId))
      .then((resp) => {
        const producto = { id: resp.id, ...resp.data() };
        setProduct(producto);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productoId]);

  return (
    <>
    <div className="ItemDetailDetalle">
      {loading ? (
        <h1>Cargando...</h1>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
        </>
  );
  
};

export default ItemDetailContainer;
