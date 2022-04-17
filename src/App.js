import Navbar from "./componenets/NavBar/Navbar";
import Inicio from "./componenets/Paginas/Inicio/Inicio";
import Productos from "./componenets/Paginas/Productos/productos";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./componenets/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos/*" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
