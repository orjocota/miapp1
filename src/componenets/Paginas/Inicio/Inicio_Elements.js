import styled from "styled-components";
import fondo from "../../Imagenes/fondo-inicio.jpg";

export const Caja_fondo = styled.section`
  background-image: url(${fondo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  border-radius: 10px;
  width: 90%;
  height: 500px;
  margin: 90px auto 0px auto;
  background-color: #d8deae;

  h2{
    color: white;
    font-size: 45px;
    height: 100px;
    margin-top: 20px;
    text-align: center;
    opacity: 0.8;

  }

  h3 {
    display: flex;
    flex-direction: column;
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    height: 150px;
    opacity: 0.8;

    
    .alta{
    text-align: center;
    padding: 30px;
    opacity: 0.9;

  }
  }
  p{
    display: flex;
    flex-direction: column;
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    text-align: right;
    padding: 30px;
    opacity: 0.8;

  }
`;
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-transform: uppercase;
  margin: 50px auto;
`;
export const Caja_items = styled.section`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px auto;
`;
export const Caja_SubItems = styled.article`
  width: 450px;
  height: auto;
  padding: 10px;
  margin: 0px 0px 20px 0px;
  text-align: center;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    margin: 20px auto;

  }

  img {
    width: 100%;
    height: 250px;
    margin: 15px auto;
    border-radius: 10px;
  }

  p {
    font-size: 20px;
    text-align: justify;
  }

  button {
    margin: 50px auto;
    width: 150px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid white;
    background-color: #0c361f;
    color: white;
    cursor: pointer;
    font-size: 20px;
    padding: 5px;
  }
  .link{
    color: white;
    text-decoration: none;
  }
`;
export const Footer = styled.footer`
  margin-top: 50px;
  height: 100%;
  width: 100%;
  background-color: #0c361f;
`;
export const Contenedor_footer = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  padding-top: 25px;
`;
export const Contenedor_in = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 90%;
  height: 100%;
`;
export const Cont_contac = styled.div`
  width: 600px;
  p {
    font-size: 18px;
    color: white;
    margin: 0 0 30px 0;
  }
  a {
    margin-right: 20px;
    font-size: 23px;
    color: orange;
  }
`;
export const Cont_sector = styled.div`
  width: 400px;
  display: flex;
  align-items: left;
  flex-direction: column;
  h2 {
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
  }
  a {
    color: orange;
    font-size: 25px;
    padding-top: 10px;
    text-decoration: none;
    margin-left: 20px;
  }
`;
export const Cont_enlace = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding-top: 15px;

  a {
    padding-bottom: 20px;
    color: orange;
    text-decoration: none;
    font-size: 22px;
    margin-left: 20px;
  }
`;
export const Legalidad = styled.div`
  display: flex;
  justify-content: end;
  align-items: right;
  width: 80%;
  margin-top: 20px;

  .lega {
    border-right: 2px solid orange;
    border-left: 2px solid orange;
    color: white;
  }
  a {
    color: white;
    padding: 0 10px 0 10px;
  }
`;
export const Footer_end = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-top: 2px solid black;
  margin-top: 15px;
  background-color: #c2c292;
  .foot-end {
    text-align: center;
    font-size: 17px;
    color: #0c361f;
    font-family: sans-serif;
    font-weight: 700;
  }
  .name {
    color: #0c361f;
    font-size: 17px;
  }
`;
