import {Routes,Route} from 'react-router-dom'
import Login from '../components/Auth/Login';
import Logout from '../components/Auth/Logout';
import Register from '../components/Auth/Register';
import Basket from '../components/Items/Basket';
import Categories from '../components/Items/Categories';
import DefaultItems from '../components/Items/DefultItems';
import ItemPage from '../components/Items/ItemPage';
import ItemsByCategory from '../components/Items/ItemsByCategory';
import Layout from '../hoc/Layout';


function AllRoutes() {
    return ( 
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='logout' element={<Logout/>}/>
                <Route path='basket' element={<Basket/>}/>
                <Route path='items' element={<DefaultItems/>}/>
                <Route path='items/:id' element={<ItemPage/>}/>
                <Route path='categories' element={<Categories/>}/>
                <Route path='categories/:category' element={<ItemsByCategory/>}/>
            </Route>
        </Routes>
     );
}

export default AllRoutes;