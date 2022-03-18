import { useLocation, useNavigate } from "react-router-dom"




export const useGetBack=()=>{
    const navigate=useNavigate()
    return ()=>navigate(-1)
}