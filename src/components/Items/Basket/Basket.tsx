import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useGetBasketItemsQuery } from "../../../store/apis/basketApi";
import { setBasketPage } from "../../../store/slices/basketPaginationSlice";
import DownloadBar from "../../UI/DownloadBar";
import PaginationBar from "../../UI/PaginationBar";
import BasketItemsList from "./BasketItemsList";
import styles from './Basket.module.scss'
import BasketInfo from "./BasketInfo";
import EmptyBasket from "./EmptyBasket";

function Basket() {

    const dispatch=useTypedDispatch()
    const {page,limit,all}=useTypedSelector((state)=>state.basketPagination)
    const {data:items,isLoading}=useGetBasketItemsQuery({page,limit})

    const onSelectPage=(num:number)=>{
        dispatch(setBasketPage(num))
    }

    return ( 
        <div className={styles.Basket}>
            {items && items.length>0?
                <>
                    <h3>Ваша корзина</h3>
                    <div className={styles.BasketList}>
                        {isLoading?
                        <DownloadBar/>
                        :<>
                            <BasketInfo/>
                            {items && <BasketItemsList items={items}/>}
                            <PaginationBar page={page} limit={limit} all={all} selectPage={onSelectPage}/>
                        </>}
                    </div>
                </>
                :<EmptyBasket/>
            }
        </div>
     );
}

export default Basket;