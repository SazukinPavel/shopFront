import { useGetItemsQuery } from "../../../store/apis/itemsApi";
import ItemsList from "../ItemsList";
import styles from './DefaultItems.module.scss'

function DefaultItems() {


    const {data:items}=useGetItemsQuery({page:0,limit:9})

    return ( 
        <div className={styles.DefaultItems}>
            <div></div>
            {items && <ItemsList items={items}/>}
            <div></div>
        </div>
     );
}

export default DefaultItems;