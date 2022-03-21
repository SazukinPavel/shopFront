import { NavLink, useNavigate } from "react-router-dom";
import { Item } from "../../../../types/item";
import Button from "../../../UI/Button";
import ItemCard from "../ItemCard/ItemCard";
import styles from './ItemCardWithButtons.module.scss'

function ItemCardWithButtons(item:Item) {

    const navigate=useNavigate()

    const goToItem=()=>navigate('/items/'+item.id)

    return ( 
        <div className={styles.ItemCardWithButtons}>
            <ItemCard {...item}/>
            <div className={styles.Buttons}>
                <Button onClick={goToItem} styleType='primary'>Перейти к товару</Button>
            </div>
        </div>
     );
}

export default ItemCardWithButtons;