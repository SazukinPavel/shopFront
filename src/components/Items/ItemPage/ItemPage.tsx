import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetItemByIdQuery } from '../../../store/apis/itemsApi';
import ItemCardFull from './ItemCardFull';
import styles from './ItemPage.module.scss'


function ItenPage() {

    const {id}=useParams()
    const {data:item,isLoading,isError}=useGetItemByIdQuery(id??'')

    return ( 
        <div>
            {item && <ItemCardFull {...item}/>}
        </div>
     );
}

export default ItenPage;