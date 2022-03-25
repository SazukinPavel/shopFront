import { UserInfo } from "../../../../types/user";
import UserCard from "./UserCard";
import styles from './UsersList.module.scss'

interface UsersListProps{
    usersInfos:UserInfo[]
}

function UsersList({usersInfos}:UsersListProps) {
    return ( 
        <div className={styles.UsersList}>
            {usersInfos.map((u,ind)=><UserCard key={ind} {...u}/>)}
        </div>
     );
}

export default UsersList;