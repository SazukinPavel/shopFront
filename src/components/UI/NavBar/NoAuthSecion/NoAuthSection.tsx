import { NavLink } from "react-router-dom";
import styles from './NoAuthSection.module.scss'


function NoAuthSection() {
    return ( 
        <div className={styles.NoAuthSection}>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
     );
}


export default NoAuthSection;