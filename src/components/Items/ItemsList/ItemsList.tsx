import { Item } from "../../../types/item";
import ItemCard from "./ItemCard";
import ItemCardWithButtons from "./ItemCardWithButtons";
import styles from './ItemsList.module.scss'

interface ItemsListProps{
    items:Item[]
}

function ItemsList({items}:ItemsListProps) {
    return ( 
        <div className={styles.ItemsList}>
            {items.map((item,i)=><ItemCardWithButtons {...item} key={i}/>)}
        </div>
     );
}

export default ItemsList;