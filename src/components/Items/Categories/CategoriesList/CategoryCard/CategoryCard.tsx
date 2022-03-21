import { useNavigate } from "react-router-dom";
import { Category } from "../../../../../types/category";
import Button from "../../../../UI/Button";
import styles from './CategoryCard.module.scss'

interface CategoryCardProps{
    event:(name:string)=>void
    category:Category
}

function CategoryCard({category:{count,name},event}:CategoryCardProps) {

    return ( 
        <div className={styles.CategoryCard}>
            <p>{name}</p>
            <p>Колличество:{count}</p>
            <Button styleType='primary' onClick={()=>event(name)}>Перейти</Button>
        </div>
     );
}

export default CategoryCard;