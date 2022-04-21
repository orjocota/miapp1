import ItemDetailContainer from './componenets/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componenets/ItemListContainer/ItemListContainer';
import NavBar from "./componenets/NavBar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./componenets/Paginas/Inicio/Inicio"
import QuieneSomos from './componenets/Paginas/Quienes Somos/QuieneSomos';
import Contactos from './componenets/Paginas/Contactos/Contactos';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  console.log(cart)




  return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/productos/detail/:productoId' element={<ItemDetailContainer setCart={setCart} cart={cart}/>} />
            <Route path='/QuienesSomos' element={<QuieneSomos/>}></Route>
            <Route path='/Contactos' element={<Contactos/>}></Route>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
        
      </>
  );
}

export default App;