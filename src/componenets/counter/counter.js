import {useState} from 'react'
import { Section, Titulo, Button, Texto, Button2 } from './counterElements';

const ItemCount = ({initial, stock, onAdd}) => {
    let [numero, setNumero] = useState(1);

    function aumentar(){
        if (numero < stock) {
            setNumero(numero + 1)
        }else{
            alert("No existen mas Elementos de este Tipo")
        }
    }
    function disminuir(){
        if (numero > initial) {
            setNumero(numero - 1)
        }else{
            alert("No es un Valor Real")
        }
        
    }
    return (
        <Section>
        <Titulo>Contador</Titulo>
        <Button onClick={aumentar}>+</Button>
        <Texto>{numero}</Texto>
        <Button onClick={disminuir}>-</Button> 
        <Button2 onClick={()=> onAdd(numero)}>Agregar al Carrito</Button2>       
        </Section>
        
    )
}

export default ItemCount

