import { NavLink } from "react-router-dom";
import { useTypedDispatch } from "../../../../hooks/useTypedDispatch";
import { logoutUser } from "../../../../store/slices/authSlice";
import styles from './UserSection.module.scss'

function AuthSection() {

    const dispatch=useTypedDispatch()

    const onLogout=()=>{
        dispatch(logoutUser)    
    }

    return ( 
        <div className={styles.AuthSection}>
            <NavLink to='/basket'>Basket</NavLink>
            <NavLink to='/logout'>Logout</NavLink>
        </div>
     );
}

export default AuthSection;