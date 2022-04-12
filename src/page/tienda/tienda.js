import React from 'react'
import ItemListContainer from '../../componenets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../componenets/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from "react-router-dom";

const Tienda = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<ItemListContainer />}>
    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
    <Route path="/detail/:prodId" element={<ItemDetailContainer/>}/>
    </Route>  
    </Routes>    
    </>

   
  )
}

export default Tienda;
