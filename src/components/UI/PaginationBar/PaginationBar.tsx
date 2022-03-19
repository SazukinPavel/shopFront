import { useMemo } from "react"
import { useTypedDispatch } from "../../../hooks/useTypedDispatch"
import {setItemsPage } from "../../../store/slices/itemsPaginationSlice"
import NumberCircle from "./NumberCircle"
import styles from './PaginationBar.module.scss'

interface PaginationBarProps{
    all:number
    page:number
    limit:number
    selectPage:(num:number)=>void
}

function PaginationBar({all,limit,page,selectPage}:PaginationBarProps) {

    const dispatch=useTypedDispatch()

    const numbers=useMemo<number[]>(()=>{
        return new Array(Math.ceil(all/limit)).fill(0)
    },[all,limit])
        
    return ( 
        <div className={styles.PaginationBar}>
            {numbers.map((_,i)=><NumberCircle className={i===page?styles.Active:''} 
            onClick={()=>selectPage(i)} key={i}>{i+1}</NumberCircle>)}
        </div>
     );
}

export default PaginationBar;