import {useState, useEffect} from 'react'
import { Section, Button, Texto } from './counterElements';

const ItemCount = ({initial, stock, onAdd}) => {
    let [numero, setNumero] = useState(1);

    useEffect(() => {
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setNumero(10)       
            }
        }, 3000)

        return (() => {
            isActive = false
            
        })
    })

    useEffect(() => {
        
    }, [numero])

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
        <Button onClick={aumentar}>+</Button>
        <Texto>{numero}</Texto>
        <Button onClick={disminuir}>-</Button>
        <Button onClick={() => onAdd(numero)}>Agregar al carrito</Button>   
        </Section>
        
    )
}

export default ItemCount