import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from './AdminPanel.module.scss'



function AdminPanel() {

    const user=useTypedSelector(state=>state.auth.user)

    return ( 
        <div className={styles.AdminPanel}>
            <h3>Добро пожаловать {user?.name}</h3>
            <div className={styles.Links}>
                <NavLink to={'/admin/users'}>Просмотреть пользователей</NavLink>
                <NavLink to={'/admin/items'}>Просмотреть товары</NavLink>
            </div>
        </div>
     );
}

export default AdminPanel;