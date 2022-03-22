import { useReducer } from "react";
import { Item } from "../../../../types/item";
import ItemCard from "../../ItemsList/ItemCard";
import DopInfoCard from "./DopInfoCard";
import styles from './ItemCardFull.module.scss'

function ItemCardFull(item:Item) {

    const [isShow,setIsShow]=useReducer((state:boolean)=>!state,false)

    return ( 
        <div className={styles.ItemCardFull}>
            <div className={styles.MainInfoBlock}>
                <h3>Основная информация:</h3>
                <ItemCard {...item}/>
            </div>
            <div className={styles.DopInfoBlock}>
                <div className={styles.DopInfoHeader}>
                    <h3>Дополнительная информация:</h3>
                    <span onClick={setIsShow}>{isShow?'-':'+'}</span>
                </div>
                {isShow && item.infos?.map((dop,ind)=><DopInfoCard key={ind} {...dop}/>)}
            </div>
        </div>
     );
}

export default ItemCardFull;