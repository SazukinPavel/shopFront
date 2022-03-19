import {Routes,Route} from 'react-router-dom'
import Login from '../components/Auth/Login';
import Logout from '../components/Auth/Logout';
import Register from '../components/Auth/Register';
import Categories from '../components/Items/Categories';
import DefaultItems from '../components/Items/DefultItems';
import ItemPage from '../components/Items/ItemPage';
import Layout from '../hoc/Layout';


function AllRoutes() {
    return ( 
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='logout' element={<Logout/>}/>
                <Route path='items' element={<DefaultItems/>}/>
                <Route path='items/:id' element={<ItemPage/>}/>
                <Route path='categories' element={<Categories/>}/>
            </Route>
        </Routes>
     );
}

export default AllRoutes;