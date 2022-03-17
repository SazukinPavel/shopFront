import { Item } from "../../../../types/item";
import styles from './ItemCard.module.scss'


function ItemCard({name,price,img,id}:Item) {
    return ( 
        <div className={styles.ItemCard}>
            <img src={img}/>
            <h3>{name}</h3>
            <p>Price:{price}$</p>
        </div>
     );
}

export default ItemCard;