import {createContext, useState} from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (producToAdd) => {
        setCart([...cart, producToAdd ])
    }
    const getQuantity = () => {
        let count = 0

        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () =>{
        setCart([])
    }

    const removeItem = (id) =>{
        const productos =  cart.filter(prod => prod.id !== id )
        setCart(productos)
    }


    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext;




