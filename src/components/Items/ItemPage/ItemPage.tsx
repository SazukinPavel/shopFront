import { useParams } from 'react-router-dom';
import { useRedirectOnError } from '../../../hooks/useRedirectOnError';
import { useGetItemByIdQuery } from '../../../store/apis/itemsApi';
import ItemCardFull from './ItemCardFull';
import DownloadBar from "../../UI/DownloadBar";
import styles from './ItemPage.module.scss'

function ItenPage() {

    const {id}=useParams()
    const {data:item,isError,isLoading}=useGetItemByIdQuery(id??'')

    useRedirectOnError(isError,'/items',isLoading)

    return ( 
        <>
            {!isLoading?
            <div className={styles.ItemPage}>
                <div></div>
                {item && <ItemCardFull {...item}/>}
                <div></div>
            </div>
            :<DownloadBar/>
            }
        </>
     );
}

export default ItenPage;