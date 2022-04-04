import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  text-transform: uppercase;
`;
export const Titulo = styled.h1`
    font-size: 40px;
    color: #001c52;
    margin-bottom:20px;
`;
export const Button = styled.button`
    width: 80px;
    height: 30px;
    font-size:20px;
    border-radius:20px;
    margin:0px;
    border: 2px solid #001c52;
    cursor: pointer;

    &:hover{
        background-color: #001c52;
        color: white;
        border: 2px solid white;
    }
`;
export const Texto = styled.p`
    margin:20px;
    font-size:25px;
`;
export const Button2 = styled.button`
    display: block;
    width:200px;
    margin: 20px auto;
    font-size:18px;
    padding:5px;
    border-radius:20px;
    border: 2px solid #001c52;
    cursor: pointer;

    &:hover{
        background-color: #001c52;
        color: white;
        border: 2px solid white;

`;