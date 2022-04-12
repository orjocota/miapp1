import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  CarWidget,
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MobileIcon,
  Wrapper,
} from "./Navbar-elements";
import { IconContext } from "react-icons/lib";
import canastaLogo from "../../canastaLogo2-1.png";
import canasta from "../../canasta.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Navbar = () => {
  const [showMobilMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2.5em" } }}>
          <LogoContainer>
            <img src={canastaLogo} alt="Logo" />
            <p>
              DEL<span>HUERTO</span>
            </p>
          </LogoContainer>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobilMenu)}>
            <FaBars />
          </MobileIcon>
          <Menu open={showMobilMenu}>
            <MenuItem>
              <NavLink
                to="/Inicio"
                className={({ isActive }) =>
                  isActive ? "linkHold" : "linkNav"
                }
              >
                Inicio
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/Tienda"
                className={({ isActive }) =>
                  isActive ? "linkHold" : "linkNav"
                }
              >
                Tienda
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/QuienesSomos"
                className={({ isActive }) =>
                  isActive ? "linkHold" : "linkNav"
                }
              >
                Quienes Somos
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/Contactos"
                className={({ isActive }) =>
                  isActive ? "linkHold" : "linkNav"
                }
              >
                Contactos
              </NavLink>
            </MenuItem>
          </Menu>
          <CarWidget>
            <img src={canasta} alt="Canasta" />
            <p>0</p>
          </CarWidget>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
