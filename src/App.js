import Navbar from "./componenets/NavBar/Navbar";
import ItemListContainer from "./componenets/ItemListContainer/ItemListContainer";
import ItemCount from "./componenets/counter/counter";
import './index.css'

function App() {

  const handleOnAdd = (quantity) =>{
    console.log(`se Agregaron ${quantity} productos al Carrito`)
  };

  return (
    <>
    <Navbar />
    <div className="itemListTittle">
    <ItemListContainer  tittle='Bienvenido a mi Pagina Principal'/>
    </div>
    <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
    </>
  );
}

export default App;
