import { useEffect } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useGetItemsQuery } from "../../../store/apis/itemsApi";
import { setItemsCount, setItemsPage } from "../../../store/slices/itemsPaginationSlice";
import DownloadBar from "../../UI/DownloadBar";
import PaginationBar from "../../UI/PaginationBar";
import ItemsList from "../ItemsList";
import styles from './DefaultItems.module.scss'

function DefaultItems() {
    const {page,limit,all}=useTypedSelector((state)=>state.itemsPagination)
    const {data:items,isLoading}=useGetItemsQuery({page:page,limit:limit})
    const dispatch=useTypedDispatch()
    
    useEffect(()=>{
        dispatch(setItemsCount())
    },[])

    const selectPage=(num:number)=>{
      dispatch(setItemsPage(num))
    }

    return ( 
       <>
          {!isLoading?
            <>
             <div className={styles.DefaultItems}>
              <div></div>
              {items && <ItemsList items={items}/>}
              <div></div>
            </div>
            <PaginationBar selectPage={selectPage} all={all} limit={limit} page={page}/>
            </>
          :<DownloadBar/>
          }
       </>

     );
}

export default DefaultItems;