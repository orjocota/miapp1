import {
  Caja_fondo,
  Caja_items,
  Caja_SubItems,
  Footer,
  H2,
  Contenedor_footer,
  Contenedor_in,
  Cont_contac,
  Cont_sector,
  Cont_enlace,
  Legalidad,
  Footer_end,
} from "./Inicio_Elements";
import img_frutas from "../../Imagenes/frutas-inicio.jpg";
import img_vegetales from "../../Imagenes/vegetales-inicio.jpg";
import img_horataliza from "../../Imagenes/hotalizas-inicio.jpg";
import { Caja_logo } from "../../NavBar/Navbar-Element";
import logo from "../../Imagenes/canastaLogo2-1.png";
import "../../../index.css";
import{FaPhoneAlt,FaEnvelope,FaFacebook,FaInstagramSquare,FaYoutube,FaTwitter} from "react-icons/fa"

const Inicio = () => {
  return (
    <>
      <Caja_fondo>
        <h2></h2>
        <p>
          Productos Frescos <span>de Alta Calidad.</span>
        </p>
        <p>Del Huerto a Tu Mesa.</p>
      </Caja_fondo>
      <H2>Nuestros Productos</H2>
      <Caja_items>
        <Caja_SubItems>
          <img src={img_frutas} />
          <h2>Frutas</h2>
          <p>
            Frutas frescas de venta al por mayor, en Del Huerto, contamos con
            precios competitivos, somos distribuidores en Plaza Abastos.
          </p>
          <button>Ver Mas</button>
        </Caja_SubItems>
        <Caja_SubItems>
          <img src={img_vegetales} />
          <h2>Vegetales</h2>
          <p>
            Tenemos gran variedad de verduras frescas durante todo el año. Solo
            en Del Huerto. Somos distribuidores mayoristas en plaza Abastos
          </p>
          <button>Ver Mas</button>
        </Caja_SubItems>
        <Caja_SubItems>
          <img src={img_horataliza} />
          <h2>Hortalizas</h2>
          <p>
            Tenemos gran variedad de hortalizas frescas durante todo el año.
            Solo en Del Huerto. Somos distribuidores mayoristas en plaza Abastos
          </p>
          <button>Ver Mas</button>
        </Caja_SubItems>
      </Caja_items>
      <Footer>
        <Contenedor_footer>
          <Caja_logo>
            <img src={logo} alt="Logo" />
            <p>Del huerto</p>
          </Caja_logo>
        </Contenedor_footer>
        <Contenedor_in>
          <Cont_contac>
            <p>Si quieres hablar con nosotros, te invitamos a visitarnos en cualquiera de nuestras oficinas. También puedes contactarnos por teléfono o correo electrónico. Te esperamos para poder empezar a ofrecerte soluciones.</p>
            <p><FaPhoneAlt/> (+57) 3155932271</p>
            <p><FaEnvelope/> delhuerto@hotmail.com.co</p>
            <a href="https://es-la.facebook.com/" target="_blank">
              <FaFacebook/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare/>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube/>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FaTwitter/>
            </a>
          </Cont_contac>
          <Cont_sector>
            <h2>Puntos de Ventas</h2>
            <a href="#">Poblado</a>
            <a href="#">Laureles</a>
            <a href="#">Envigado</a>
            <a href="#">Sabaneta</a>
            <a href="#">Itagui</a>
          </Cont_sector>
          <Cont_enlace>
            <a href="">Inicio</a>
            <a href="">Quienes Somos</a>
            <a href="">Productos</a>
            <a href="">Contactos</a>
          </Cont_enlace>
        </Contenedor_in>
        <Legalidad>
            <span><a href="#">Aviso Legal</a></span>
            <a href="#">Politica de Cookies</a>
        </Legalidad>
        <Footer_end>
          <p>Copyright @ 2021 - Diseño Web Realizado con React Js por <span>Orlando Contreras.</span> </p>
        </Footer_end>
      </Footer>
    </>
  );
};

export default Inicio;
