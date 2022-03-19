import { useEffect } from "react";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchCategoriesThunk } from "../../../store/slices/categoriesSlice";
import DownloadBar from "../../UI/DownloadBar";
import CategoriesList from "./CategoriesList";

function Categories() {

    const dispatch=useTypedDispatch()
    const {isLoading,categories}=useTypedSelector((state)=>state.categories)

    useEffect(()=>{
        dispatch(fetchCategoriesThunk())
    },[]) 

    return ( 
        <div>
            {!isLoading?
                categories&&<CategoriesList categories={categories}/>
                :<DownloadBar/>
            }
        </div>
     );
}

export default Categories;