import { useGetBasketAllPriceAndCountQuery } from '../../../../store/apis/basketApi';
import styles from './BasketInfo.module.scss'

function BasketInfo() {

    const {data:basketInfo}=useGetBasketAllPriceAndCountQuery(null)

    return ( 
        <div className={styles.BasketInfo}>
            <p>Товаров в корзине:{basketInfo?.count}<br/>Общая цена:{basketInfo?.price}</p>
        </div>
     );
}

export default BasketInfo;