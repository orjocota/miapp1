import { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { firestoreDb } from "../service/firebase";
import { useParams } from "react-router-dom";
import "../../index.css";
import { NavLink } from "react-router-dom";
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

const ItemListContainer = () => {
  const [prod1, setProd1] = useState([]);
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(collection(firestoreDb, "categorias")).then((respo) => {
      const categorias = respo.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categorias);
    });
  }, [categoryId]);

  useEffect(() => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "vegetales"),
          where("categoria", "==", categoryId)
        )
      : query(collection(firestoreDb, "vegetales"));

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProd1(products);
    });
  }, [categoryId]);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="caja_categorias">
        <div className="titulo_categorias">Categorias</div>
        <div className="cuerpo_categorias">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/categorias/${cat.id}`}
              className={({ isActive }) => (isActive ? "buttonHold" : "button1")}
            >
              {cat.description}
            </NavLink>
          ))}
        </div>
      </div>

      <div onClick={handleClick}>
        <ItemList prod={prod1} />
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

export default ItemListContainer;
