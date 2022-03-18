import { checkTokenThunk } from './../store/slices/authSlice';
import { useTypedDispatch } from './useTypedDispatch';
import { useEffect } from "react"



export const useCheckToken=()=>{
    const dispatch= useTypedDispatch()

    useEffect(()=>{
        dispatch(checkTokenThunk())
    },[dispatch])
}