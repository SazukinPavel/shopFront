import { DispatchType } from './../store/store';
import { useDispatch } from "react-redux";


export const useTypedDispatch=()=>useDispatch<DispatchType>()