import ItemDetailContainer from './componenets/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componenets/ItemListContainer/ItemListContainer';
import NavBar from "./componenets/NavBar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./componenets/Paginas/Inicio/Inicio"


const App = () => {
  return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/productos/detail/:productoId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
        
      </>
  );
}

export default App;