import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;  
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
    width: 40px;
    height: 30px;
    font-size:18px;
    border-radius:20px;
    border: 2px solid #001c52;
    cursor: pointer;

    &:hover{
        background-color: #001c52;
        color: white;
        border: 2px solid white;
    }
`;
export const Texto = styled.p`
    margin:10px;
    font-size:20px;
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