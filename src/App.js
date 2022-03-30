import Navbar from "./componenets/NavBar/Navbar";
import ItemListContainer from "./componenets/ItemListContainer/ItemListContainer";
import './index.css'

function App() {
  return (
    <>
    <Navbar />
    <div className="itemListTittle">
    <ItemListContainer  tittle='Bienvenido a mi Pagina Principal'/>
    </div>
    </>
  );
}

export default App;
