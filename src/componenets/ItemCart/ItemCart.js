import "./ItemCart.css"

export const ItemCart = ({id, precio, titulo, imagen, quantity}) => {

    return(
        <>
        <div className="caja_item_cart">
            <div className="caja_inte_cart">
                <img src={imagen} alt={titulo} className="img-cart"/>
                <p className="titulo-cart">{titulo}</p>                
            </div>
            <div className="caja_secun_cart">
                <p>Cantidad : {quantity}</p>
                <p>Precio : $ {precio}</p>
                <p>Total : $ {precio*quantity}</p>
            </div>
        </div>       
        </>
    )
}