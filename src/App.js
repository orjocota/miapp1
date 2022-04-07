import Navbar from "./componenets/NavBar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ItemListContainer from "./componenets/ItemListContainer/ItemListContainer";
// import ItemCount from "./componenets/counter/counter";
import Inicio from "./page/inicio/inicio";
import Tienda from "../src/page/tienda/tienda";
import QuienesSomos from "../src/page/quienesSomos/quienesSomos";
import Contactos from "../src/page/contactos/contactos";
import "./index.css";

function App() {
  // const handleOnAdd = (quantity) => {
  //   console.log(`se Agregaron ${quantity} productos al Carrito`);
  // };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/Tienda" element={<Tienda/>} />
          <Route path="/QuienesSomos" element={<QuienesSomos/>} />
          <Route path="/Contactos" element={<Contactos/>} />
        </Routes>
      </Router>
      {/* <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/> */}
    </>
  );
}

export default App;
