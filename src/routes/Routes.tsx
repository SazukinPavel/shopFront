import {Routes,Route} from 'react-router-dom'
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Layout from '../hoc/Layout';


function AllRoutes() {
    return ( 
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Route>
        </Routes>
     );
}

export default AllRoutes;