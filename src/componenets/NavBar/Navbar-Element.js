import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #0c361f;
  height: 70px;
  position: fixed;
  top: 0;
`;
export const Header_hijo = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: auto;
`;
export const Caja_logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-left: 1.3rem;
    color: orange;
    margin-top: 8px;
    padding: 5px;
    text-transform: uppercase;
  }
  img {
    width: 100px;
    height: 60px;
    mix-blend-mode: hard-light;
    margin-left: 10px;
  }
`;
export const Caja_menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
export const Menu_item = styled.li`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
color: white;
font-size: 23px;
cursor: pointer;
font-weight: 700;

&:hover{
    background-color: #c2c292;
    color: #0c361f;
    font-weight: 700;
    font-size: 23px;
}
`;
export const Caja_carrito = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin: 0 10px 0 0;
  height: 80%;
  padding: 5px;
  border-radius: 8px;
  background-color: green;
  p {
    display: flex;
    justify-content: center;
    align-items: start;
    margin: 0 10px 30px 5px;
    font-size: 16px;
    font-family: sans-serif;
    color: white;
    font-weight: 700;
  }
  img {
    width: 35px;
    height: 35px;
  }
`;
