import { count } from "console";
import { useEffect } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useGetUsersInfoQuery } from "../../../store/apis/usersApi";
import { setUsersCount, setUsersPage } from "../../../store/slices/usersPaginationSlice";
import DownloadBar from "../../UI/DownloadBar";
import EmptyPage from "../../UI/EmptyPage";
import PaginationBar from "../../UI/PaginationBar";
import UsersList from "./UsersList";


function UserStats() {

    const dispatch=useTypedDispatch()
    const {page,limit,all}=useTypedSelector(state=>state.usersPagination)
    const {data:userInfos,isLoading,isFetching}=useGetUsersInfoQuery({page,limit})

    useEffect(()=>{
        dispatch(setUsersCount())
    },[dispatch,isFetching])
    
    const onSelectPage=(num:number)=>{
        dispatch(setUsersPage(num))
    }

    return ( 
        <div>
            {isLoading && all>0?
            <DownloadBar/>
            :<>
                {userInfos && <UsersList usersInfos={userInfos}/>}
                <PaginationBar selectPage={onSelectPage} all={all} page={page} limit={limit}/>
            </>
            }
            {all===0 && <EmptyPage message="Пока пользователей нет(" link="/admin" linkMessage="Вернуться в админ меню"/>}
        </div>
     );
}

export default UserStats;