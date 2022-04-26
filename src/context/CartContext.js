import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        // setCart([...cart, productToAdd])
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const newProduct = cart.map(prod =>{
                if(prod.id === productToAdd.id){
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else{
                    return prod
                }
            })
            setCart(newProduct)

        }
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }
    const getQuantityProd = (id) =>{
        return cart.find(prod => prod.id === id)?.quantity
    }
  return (
    <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getQuantityProd }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;