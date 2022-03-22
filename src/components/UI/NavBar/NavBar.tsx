import { useTypedSelector } from "../../../hooks/useTypedSelector";
import AdminSection from "./AdminSection";
import BaseSection from "./BaseSection";
import './NavBar.scss'
import NoAuthSecion from "./NoAuthSecion";
import UserSection from "./UserSection";

function NavBar() {

    const {user,isAuth}=useTypedSelector((state)=>state.auth)

    return ( 
        <nav className='NavBar'>
            <BaseSection/>
            {!isAuth && <NoAuthSecion/>}
            {user?.role==='USER' && <UserSection/>}
            {user?.role==='ADMIN' && <AdminSection/>}
        </nav>
     );
}

export default NavBar;