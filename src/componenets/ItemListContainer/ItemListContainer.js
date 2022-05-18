import { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { firestoreDb } from "../service/firebase";
import { useParams } from "react-router-dom";
import "../../index.css";
import { NavLink } from "react-router-dom";

const ItemListContainer = () => {
  const [prod1, setProd1] = useState([]);
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(collection(firestoreDb, "categorias")).then((respo) => {
      const categorias = respo.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categorias);
    });
  }, [categoryId]);

  useEffect(() => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "vegetales"),
          where("categoria", "==", categoryId)
        )
      : query(collection(firestoreDb, "vegetales"));

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProd1(products);
    });
  }, [categoryId]);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="caja_categorias">
        <div className="titulo_categorias">Categorias</div>
        <div className="cuerpo_categorias">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/categorias/${cat.id}`}
              className={({ isActive }) => (isActive ? "buttonHold" : "button1")}
            >
              {cat.description}
            </NavLink>
          ))}
        </div>
      </div>

      <div onClick={handleClick}>
        <ItemList prod={prod1} />
      </div>
    </>
  );
};

export default ItemListContainer;
