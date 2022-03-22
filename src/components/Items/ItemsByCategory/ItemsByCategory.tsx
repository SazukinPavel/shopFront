import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRedirectOnError } from "../../../hooks/useRedirectOnError";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useGetItemsByCategoryQuery } from "../../../store/apis/itemsApi";
import { getItemsByCategoryCountThunk, resetItemsByCategoryPagination, setItemsByCategoryAll, setItemsByCategoryPage } from "../../../store/slices/itemsByCategoryPaginationSlice";
import DownloadBar from "../../UI/DownloadBar";
import PaginationBar from "../../UI/PaginationBar";
import ItemsList from "../ItemsList";
import styles from './ItemsByCategory.module.scss'

function ItemsByCategory() {

    const {category}=useParams<string>()
    const dispatch=useTypedDispatch()
    const {isError,page,limit,all}=useTypedSelector((state)=>state.categoriesPagination)
    const {data,isLoading}=useGetItemsByCategoryQuery({category:category??'',page,limit})

    useEffect(()=>{
        dispatch(getItemsByCategoryCountThunk(category??''))
        
    },[dispatch])

    useRedirectOnError(isError,'/categories')

    useEffect(()=>{
        dispatch(resetItemsByCategoryPagination())
    },[category])

    const onSelectPage=(num:number)=>{
        dispatch(setItemsByCategoryPage(num))
    }

    return ( 
        <div className={styles.ItemsByCategory}>
            <div>
                <h3>Категория {category}</h3>
                {isLoading?
                <DownloadBar/>
                :<>
                    {data && <ItemsList items={data}/>}
                    <PaginationBar selectPage={onSelectPage} page={page} limit={limit} all={all}/>
                </>
                }
            </div>
        </div>
     );
}

export default ItemsByCategory;