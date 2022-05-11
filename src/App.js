import ItemDetailContainer from "./componenets/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componenets/ItemListContainer/ItemListContainer";
import NavBar from "./componenets/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componenets/Paginas/Inicio/Inicio";
import QuieneSomos from "./componenets/Paginas/Quienes Somos/QuieneSomos";
import Contactos from "./componenets/Paginas/Contactos/Contactos";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./componenets/Cart/Cart";
import Form from "./componenets/Form/form";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categorias/:categoryId" element={<ItemListContainer />}/>
            <Route path="/productos/detail/:productoId" element={<ItemDetailContainer />}/>
            <Route path="/QuienesSomos" element={<QuieneSomos />} />
            <Route path="/Contactos" element={<Contactos />} />
            <Route path="/form" element={<Form/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>NOT FOUND 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
