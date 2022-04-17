import {useState} from 'react'
import { Section, Button, Texto } from './counterElements';

const ItemCount = ({initial, stock, onAdd}) => {
    let [numero, setNumero] = useState(1);

    function aumentar(){
        if (numero < 10) {
            setNumero(numero + 1)
        }else{
            alert("No existen mas Elementos de este Tipo")
        }
    }
    function disminuir(){
        if (numero > 1) {
            setNumero(numero - 1)
        }else{
            alert("No es un Valor Real")
        }
        
    }
    return (
        <Section>
        <Button onClick={aumentar}>+</Button>
        <Texto>{numero}</Texto>
        <Button onClick={disminuir}>-</Button>   
        </Section>
        
    )
}

export default ItemCount