import { Item } from "../../../../types/item";
import ItemCard from "../../ItemsList/ItemCard";
import DopInfoCard from "./DopInfoCard";
import styles from './ItemCardFull.module.scss'

function ItemCardFull(item:Item) {
    return ( 
        <div className={styles.ItemCardFull}>
            <h3>Основная информация:</h3>
            <ItemCard {...item}/>
            <h3>Дополнительная информация:</h3>
            {item.infos?.map((dop,i)=><DopInfoCard {...dop}/>)}
        </div>
     );
}

export default ItemCardFull;