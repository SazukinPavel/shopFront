import { useNavigate } from 'react-router-dom';
import { useDeleteFromBasketMutation } from '../../../../store/apis/basketApi';
import { BasketItem } from '../../../../types/basket';
import BasketItemCard from './BasketItemCard';
import styles from './BasketItemsList.module.scss'

interface BasketItemsListProp{
    items:BasketItem[]
}

function BasketItemsList({items}:BasketItemsListProp) {

    const navigate=useNavigate()
    const [onDelete,{}]=useDeleteFromBasketMutation()

    const goToItem=(id:string)=>{
        navigate('/items/'+id)
    }

    const deleteOne=(id:string)=>{
        onDelete({all:false,id})
    }

    const deleteAll=(id:string)=>{
        onDelete({all:true,id})
    }

    return ( 
    <div className={styles.BasketItemsList}>
        {items.map((i,ind)=><BasketItemCard key={ind} basketItem={i} goToItem={goToItem} deleteAll={deleteAll} deleteOne={deleteOne}/>)}
    </div> 
    );
}

export default BasketItemsList;