import React, {useState} from "react";
import { FaShoppingBasket, FaBars, FaShoppingCart } from 'react-icons/fa';
import { CarWidget, Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./Navbar-elements";
import { IconContext } from "react-icons/lib";


const Navbar = () =>{
    const [showMobilMenu, setShowMobileMenu] = useState(false);
    
     return(
         <Container>
             <Wrapper>
                 <IconContext.Provider value = {{style: {fontSize: "2.5em"}}}>                 
                <LogoContainer>
                    <FaShoppingBasket />
                    <p>
                        The O.C Market
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
                    <FaShoppingCart/>
                    <p>
                        4
                    </p>
                 </CarWidget>
                 </IconContext.Provider>
             </Wrapper>
            

         </Container>
     )
 }
 export default Navbar
