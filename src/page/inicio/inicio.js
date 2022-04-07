import { MuralFondo } from "../../componenets/NavBar/Navbar-elements";
import { Caja1 } from "./inicio-elements";
import imagenFondo from "../../muralFrutasFondo.jpg";
const Inicio = () =>{
  return(
    <MuralFondo>
    <img src={imagenFondo} alt="ImagenDeFondo"/> 
    <Caja1>
      PAGINA DE INICIO
    </Caja1>
  </MuralFondo>
  )
}

export default Inicio;



