import Navbar from "./componenets/NavBar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./page/inicio/inicio";
import Tienda from "../src/page/tienda/tienda";
import QuienesSomos from "../src/page/quienesSomos/quienesSomos";
import Contactos from "../src/page/contactos/contactos";
import "./index.css";
import ItemDetailContainer from "./componenets/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/Tienda/*" element={<Tienda />} />
          <Route path="/QuienesSomos" element={<QuienesSomos/>} />
          <Route path="/Contactos" element={<Contactos/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
