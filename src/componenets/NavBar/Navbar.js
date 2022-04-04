import React, {useState} from "react";
import { FaBars} from 'react-icons/fa';
import { CarWidget, Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./Navbar-elements";
import { IconContext } from "react-icons/lib";
import canastaLogo from "../../canastaLogo2-1.png";
import canasta from "../../canasta.svg"


const Navbar = () =>{
    const [showMobilMenu, setShowMobileMenu] = useState(false);
    
     return(
         <Container>
             <Wrapper>
                 <IconContext.Provider value = {{style: {fontSize: "2.5em"}}}>                 
                <LogoContainer>
                    <img src= {canastaLogo} alt="Logo"/>
                    <p>
                        DEL HUERTO
                    </p>
                </LogoContainer>
                <MobileIcon onClick={()=>setShowMobileMenu(!showMobilMenu)}>
                    <FaBars/>
                </MobileIcon>
                <Menu open={showMobilMenu}>
                     <MenuItem>
                        <MenuItemLink>
                            Inicio
                        </MenuItemLink>
                     </MenuItem>
                     <MenuItem>
                        <MenuItemLink>
                            Sobre Nosotros
                        </MenuItemLink>
                     </MenuItem>
                     <MenuItem>
                        <MenuItemLink>
                            Productos
                        </MenuItemLink>
                     </MenuItem>
                     <MenuItem>
                        <MenuItemLink>
                            Contactos
                        </MenuItemLink>
                     </MenuItem>
                 </Menu>
                 <CarWidget>
                    <img src={canasta} alt="Canasta"/>
                    <p>
                        0
                    </p>
                 </CarWidget>
                 </IconContext.Provider>
             </Wrapper>
            

         </Container>
     )
 }
 export default Navbar
