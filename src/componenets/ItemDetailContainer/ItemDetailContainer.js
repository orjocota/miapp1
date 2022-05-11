import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { firestoreDb } from "../service/firebase";
import { getDoc, doc } from "firebase/firestore";
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
import "../../index.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { productoId } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, "vegetales", productoId))
      .then((resp) => {
        const producto = { id: resp.id, ...resp.data() };
        setProduct(producto);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productoId]);

  return (
    <>
    <div className="ItemDetailDetalle">
      {loading ? (
        <h1>Cargando...</h1>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <h1>El producto no existe</h1>
      )}
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

export default ItemDetailContainer;
