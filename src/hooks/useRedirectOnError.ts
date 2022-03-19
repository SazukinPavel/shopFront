import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




export const useRedirectOnError=(isError:boolean,path:string,isLoading:boolean=false)=>{

    const navigate=useNavigate()

    useEffect(()=>{
        if(!isLoading && isError){
            navigate(path)
        }
    },[isLoading,path,isError])
}