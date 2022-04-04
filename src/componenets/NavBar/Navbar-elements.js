import styled from "styled-components";


export const Container = styled.div `
    width: 100%; 
    height: 85px; 
    background-color: #001c52;
`;
export const Wrapper = styled.div`
   width: 100%;
   max-width: 1300px; 
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: auto;
`;
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    cursor:pointer;
    
    
    p{
        &:nth-child(2){
            font-size: 1.6rem;
            margin-left: 1.2rem;
            color: orange;
            margin-top:5px;
        }
    }

    img{
        width: 100px;
        height: 70px;
        mix-blend-mode: hard-light;
    }
        
       
`;
export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 1010px){
        background-color:#001c52;
        position: absolute;
        top: 70px;
        left: ${({open}) =>(open ? "0" : "-100%")};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        border-top: 1px solid #bbd6f1;

    }
`;    
export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 1010px){
        width:100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const MenuItemLink = styled.a`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #bbd6f1;
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    transition: 0.5s all ease;
    cursor: pointer;
    
    &:hover{
        color: white;
        background-color: #5776ba;
        transition: 0.5s all ease;
    }

    @media screen and (max-width: 1010px){
        width: 100%;
    }

`;
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 1010px){
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 10px 10px;
        cursor: pointer;

        svg{
            fill: orange;
        }
    }
`;
export const CarWidget = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:10px;
    margin:0 10px 0 0;
    height:100%;

    p{
        display:flex;
        justify-content:center;
        align-items: center;
        margin: 0 0 0 10px;
        font-size: 28px;
        font-family: sans-serif;
        color: #bbd6f1;
    }
    img{
        width:60px;
        height:60px;
                
   }

`;

