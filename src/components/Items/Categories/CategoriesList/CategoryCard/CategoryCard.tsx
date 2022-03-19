import { useNavigate } from "react-router-dom";
import { Category } from "../../../../../types/category";
import Button from "../../../../UI/Button";
import styles from './CategoryCard.module.scss'


function CategoryCard({count,name}:Category) {

    const navigate=useNavigate()
    const onClick=()=>navigate('/categories/'+name)

    return ( 
        <div className={styles.CategoryCard}>
            <p>{name}</p>
            <p>Колличество:{count}</p>
            <Button styleType='primary' onClick={onClick}>Перейти</Button>
        </div>
     );
}

export default CategoryCard;