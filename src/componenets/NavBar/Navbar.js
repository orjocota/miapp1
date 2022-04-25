import React, { useContext } from "react";
import {
  Caja_carrito,
  Caja_logo,
  Caja_menu,
  Header,
  Header_hijo,
  Menu_item,
} from "./Navbar-Element";
import logo from "../Imagenes/canastaLogo2-1.png";
import canasta from "../Imagenes/canasta.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <Header>
      <Header_hijo>
        <Link to="/inicio" className="Link">
          <Caja_logo>
            <img src={logo} alt="Logo" />
            <p>Del huerto</p>
          </Caja_logo>
        </Link>
        <Caja_menu>
          <Menu_item>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "linkHold" : "linkNav")}
            >
              Inicio
            </NavLink>
          </Menu_item>
          <Menu_item>
            <NavLink
              to="/QuienesSomos"
              className={({ isActive }) => (isActive ? "linkHold" : "linkNav")}
            >
              Quienes Somos
            </NavLink>
          </Menu_item>
          <Menu_item>
            <NavLink
              to="/productos"
              className={({ isActive }) => (isActive ? "linkHold" : "linkNav")}
            >
              Productos
            </NavLink>
          </Menu_item>
          <Menu_item>
            <NavLink
              to="/Contactos"
              className={({ isActive }) => (isActive ? "linkHold" : "linkNav")}
            >
              Contactos
            </NavLink>
          </Menu_item>
        </Caja_menu>
        <Link to="/Cart" className="Link">
          <Caja_carrito>
            <img src={canasta} alt="Canasta" />
            <p>{getQuantity()}</p>
          </Caja_carrito>
        </Link>
      </Header_hijo>
    </Header>
  );
};

export default Navbar;
