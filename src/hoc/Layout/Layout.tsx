import {Outlet} from 'react-router-dom'
import NavBar from '../../components/UI/NavBar';


function Layout() {
    return ( 
        <>
            <NavBar/>
            <main>
                <Outlet></Outlet>
            </main>
        </>
     );
}

export default Layout;