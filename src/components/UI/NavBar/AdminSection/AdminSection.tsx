import { NavLink } from "react-router-dom";
import styles from './AdminSection.module.scss'

function AdminSection() {
    return ( 
        <div className={styles.AdminSection}>
            <NavLink to='/admin'>Admin Panel</NavLink>
            <NavLink to='/logout'>Logout</NavLink>
        </div>
     );
}

export default AdminSection;