import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  Footer,
  Contenedor_footer,
  Contenedor_in,
  Cont_contac,
  Cont_sector,
  Cont_enlace,
  Legalidad,
  Footer_end, } from "../Paginas/Inicio/Inicio_Elements";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Caja_logo } from "../NavBar/Navbar-Element";
import logo from "../Imagenes/canastaLogo2-1.png"

const Cart = () => {
  const { cart, totalCost, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <h1 className="container-cart">
          No Existen Productos en el Carrito
          <Link to="/productos">
            <button className="button">Volver a Productos</button>
          </Link>
        </h1>
        <Footer>
        <Contenedor_footer>
          <Caja_logo>
            <img src={logo} alt="Logo" />
            <p>Del huerto</p>
          </Caja_logo>
        </Contenedor_footer>
        <Contenedor_in>
          <Cont_contac>
            <p>
              Si quieres hablar con nosotros, te invitamos a visitarnos en
              cualquiera de nuestras oficinas. También puedes contactarnos por
              teléfono o correo electrónico. Te esperamos para poder empezar a
              ofrecerte soluciones.
            </p>
            <p>
              <FaPhoneAlt /> (+57) 3155932271
            </p>
            <p>
              <FaEnvelope /> delhuerto@hotmail.com.co
            </p>
            <a href="https://es-la.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FaTwitter />
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
          <span>
            <a href="#">Aviso Legal</a>
          </span>
          <a href="#">Politica de Cookies</a>
        </Legalidad>
        <Footer_end>
          <p>
            Copyright @ 2021 - Diseño Web Realizado con React Js por{" "}
            <span>Orlando Contreras.</span>{" "}
          </p>
        </Footer_end>
      </Footer>
      </>
    );
  }

  return (
    <>
    <div className="container-cart">
      <h2>Carrito de Compra</h2>
      <div>
        {cart.map((prod) => (
          <ItemCart key={prod.id} {...prod} />
        ))}
      </div>
      <div className="total">
          Total a Pagar:    $  {totalCost()}
      </div>
      <Link to="/productos">
        <button className="button">Volver a Productos</button>
      </Link>
      <Link className="button" to={'/cart'} onClick={() => clearCart()}>Vaciar carrito</Link>
      <Link className="button" to={'/form'}>Continuar Compra</Link>
    </div>
    <Footer>
        <Contenedor_footer>
          <Caja_logo>
            <img src={logo} alt="Logo" />
            <p>Del huerto</p>
          </Caja_logo>
        </Contenedor_footer>
        <Contenedor_in>
          <Cont_contac>
            <p>
              Si quieres hablar con nosotros, te invitamos a visitarnos en
              cualquiera de nuestras oficinas. También puedes contactarnos por
              teléfono o correo electrónico. Te esperamos para poder empezar a
              ofrecerte soluciones.
            </p>
            <p>
              <FaPhoneAlt /> (+57) 3155932271
            </p>
            <p>
              <FaEnvelope /> delhuerto@hotmail.com.co
            </p>
            <a href="https://es-la.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FaTwitter />
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
          <span>
            <a href="#">Aviso Legal</a>
          </span>
          <a href="#">Politica de Cookies</a>
        </Legalidad>
        <Footer_end>
          <p>
            Copyright @ 2021 - Diseño Web Realizado con React Js por{" "}
            <span>Orlando Contreras.</span>{" "}
          </p>
        </Footer_end>
      </Footer>
    </>
  );
};

export default Cart;
