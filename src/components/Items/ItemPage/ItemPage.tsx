import { useParams } from 'react-router-dom';
import { useRedirectOnError } from '../../../hooks/useRedirectOnError';
import { useGetItemByIdQuery } from '../../../store/apis/itemsApi';
import ItemCardFull from './ItemCardFull';
import DownloadBar from "../../UI/DownloadBar";
import styles from './ItemPage.module.scss'
import Button from '../../UI/Button';
import { useAddItemToBasketMutation, useGetBasketItemKolvoQuery } from '../../../store/apis/basketApi';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

function ItemPage() {

    const {id}=useParams()
    const {data:item,isError,isLoading}=useGetItemByIdQuery(id??'')
    const [addToBasket,{}]=useAddItemToBasketMutation()
    const {isAuth}=useTypedSelector(state=>state.auth)
    useRedirectOnError(isError,'/items',isLoading)
    const {data:kolvo}=useGetBasketItemKolvoQuery(id??'')

    const onAddToBasket=()=>{
        addToBasket({itemId:id??''})
    }

    return ( 
        <>
            {!isLoading?
            <div className={styles.ItemPage}>
                {isAuth &&  
                <div className={styles.AuthItemInfo}>
                    <p>У вас в корзине:{kolvo}</p>
                    <Button onClick={onAddToBasket} styleType='primary'>Добавить в корзину</Button>
                </div>}
                {item && <ItemCardFull {...item}/>}
            </div>
            :<DownloadBar/>
            }
        </>
     );
}

export default ItemPage;