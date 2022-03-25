import { useNavigate } from 'react-router-dom';



export const useGoTo=(path:string)=>{
    const navigate=useNavigate()
    return ()=>navigate(path)
}