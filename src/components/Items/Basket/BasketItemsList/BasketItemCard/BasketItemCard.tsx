import { BasketItem } from "../../../../../types/basket";
import Button from "../../../../UI/Button";
import ItemCard from "../../../ItemsList/ItemCard";
import styles from './BasketItemCard.module.scss'

interface BasketItemCardProps{
    basketItem:BasketItem
    deleteOne:(id:string)=>void
    deleteAll:(id:string)=>void
    goToItem:(id:string)=>void
}

function BasketItemCard({basketItem:{id,item,kolvo},goToItem,deleteAll,deleteOne}:BasketItemCardProps){
    return ( 
        <div className={styles.BasketItemCard}>
            <ItemCard {...item}></ItemCard>
            <p>В корзине:{kolvo}</p>
            <div className={styles.Buttons}>
                <Button styleType="warn" onClick={()=>deleteOne(item.id)}>Удалить одну</Button>
                <Button styleType="warn" onClick={()=>deleteAll(item.id)}>Удалить все</Button>
                <Button styleType="primary" onClick={()=>goToItem(item.id)}>Посмотреть</Button>
            </div>
        </div>
     );
}

export default BasketItemCard;