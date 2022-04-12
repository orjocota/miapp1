import ItemCount from "../counter/counter";


const ItemDetail = (id,titulo, categoria, detalle, imagen, precio) => {
    const handleOnAdd = (quantity) => {
        console.log(`se Agregaron ${quantity} productos al Carrito`);
      }

    return (
        <div className="caja-card">
          <h2 className="titulo-card">{titulo}</h2>
          <img src={imagen} alt={titulo} className="imagen-card" />
          <p>{categoria}</p>
          <p className="precio-card">{precio}</p>
          <p>{detalle}</p>
          <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
          <button className="button-carrito">Add Carrito</button>
        </div>
      );

}

export default ItemDetail