import Item from "../Item/Item";
import "../../index.css"

const ItemList = ({vegetal}) => {
    return(
        <div className="container">
            {vegetal.map(vege => <Item key={vege.id} {...vege}/>)}
        </div>
    )
}

export default ItemList;