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
import { Link } from "react-router-dom";
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
              
                <Link to="/Inicio" className="linkNav">Inicio</Link>
              
            </MenuItem>
            <MenuItem>
             
                <Link to="/Tienda" className="linkNav">Tienda</Link>
              
            </MenuItem>
            <MenuItem>
              
                <Link to="/QuienesSomos" className="linkNav">Quienes Somos</Link>
             
            </MenuItem>
            <MenuItem>
              
                <Link to="/Contactos" className="linkNav">Contactos</Link>
             
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
