import { useParams } from 'react-router-dom';
import { useRedirectOnError } from '../../../hooks/useRedirectOnError';
import { useGetItemByIdQuery } from '../../../store/apis/itemsApi';
import ItemCardFull from './ItemCardFull';
import DownloadBar from "../../UI/DownloadBar";
import styles from './ItemPage.module.scss'
import Button from '../../UI/Button';
import { useAddItemToBasketMutation } from '../../../store/apis/basketApi';

function ItemPage() {

    const {id}=useParams()
    const {data:item,isError,isLoading}=useGetItemByIdQuery(id??'')
    const [addToBasket,{}]=useAddItemToBasketMutation()

    useRedirectOnError(isError,'/items',isLoading)

    const onAddToBasket=()=>{
        addToBasket({itemId:id??''})
    }

    return ( 
        <>
            {!isLoading?
            <div className={styles.ItemPage}>
                <Button onClick={onAddToBasket} styleType='primary'>Добавить в корзину</Button>
                {item && <ItemCardFull {...item}/>}
            </div>
            :<DownloadBar/>
            }
        </>
     );
}

export default ItemPage;