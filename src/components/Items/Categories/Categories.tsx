import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchCategoriesThunk } from "../../../store/slices/categoriesSlice";
import { resetItemsByCategoryPagination } from "../../../store/slices/itemsByCategoryPaginationSlice";
import DownloadBar from "../../UI/DownloadBar";
import CategoriesList from "./CategoriesList";

function Categories() {
    const navigate=useNavigate()
    const dispatch=useTypedDispatch()
    const {isLoading,categories}=useTypedSelector((state)=>state.categories)

    useEffect(()=>{
        dispatch(fetchCategoriesThunk())
    },[]) 

    const onCategoryCardClick=(name:string)=>{
        dispatch(resetItemsByCategoryPagination())
        navigate('/categories/'+name)
    }

    return ( 
        <div>
            {!isLoading?
                categories&&<CategoriesList onCategoryClick={onCategoryCardClick} categories={categories}/>
                :<DownloadBar/>
            }
        </div>
     );
}

export default Categories;