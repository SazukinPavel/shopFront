import { NavLink } from "react-router-dom";
import styles from './BaseSection.module.scss'

function BaseSection() {
    return ( 
        <div className={styles.BaseSection}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/items'>Items</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
        </div>
     );
}

export default BaseSection;