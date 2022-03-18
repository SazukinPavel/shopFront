import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { logoutUser } from "../../../store/slices/authSlice";
import styles from './Logout.module.scss'

function Logout() {

    const dispatch = useTypedDispatch()
    useEffect(()=>{
        dispatch(logoutUser())
    },[])

    return ( 
        <div className={styles.Logout}>
            <h4>Вы вошли из аккаунта</h4>
            <p><NavLink to='/login'>Перейти к авторизации</NavLink></p>
        </div>
     );
}

export default Logout;

