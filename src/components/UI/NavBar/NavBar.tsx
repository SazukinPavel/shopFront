import { useTypedSelector } from "../../../hooks/useTypedSelector";
import AuthSection from "./AuthSection";
import BaseSection from "./BaseSection";
import NoAuthSecion from "./NoAuthSecion";
import './NavBar.scss'

function NavBar() {

    const isAuth=useTypedSelector((state)=>state.auth.isAuth)

    return ( 
        <nav className='NavBar'>
            <BaseSection/>
            {isAuth?<AuthSection/>:<NoAuthSecion/>}
        </nav>
     );
}

export default NavBar;