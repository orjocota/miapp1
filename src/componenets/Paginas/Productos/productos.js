import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";

const Productos = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />}>
        <Route path="/detail/:productoId" element={<ItemDetailContainer />} />
      </Route>
    </Routes>
  );
};

export default Productos;
