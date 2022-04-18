import Item from "../Item/Item";
import { useState, useEffect } from "react";
import { getCategories } from "../../asyncMock";
import { NavLink } from "react-router-dom";
import "../../index.css";

const ItemList = ({ prod }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])
  return (
    <>
    <div className="caja_categorias">
        <div className="titulo_categorias">
          Categorias
        </div>
        <div className="cuerpo_categorias">
        { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({isActive}) => isActive ? 'button' : 'button'}>{cat.description}</NavLink>)}
        </div>
      </div> 
      <div className="container">
        {prod.map(vege => <Item key={vege.id} {...vege} />)}
        </div>
    </>
  );
};

export default ItemList;