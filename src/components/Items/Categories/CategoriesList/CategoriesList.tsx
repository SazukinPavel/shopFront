import { Category } from '../../../../types/category';
import styles from './CategoriesList.module.scss'
import CategoryCard from './CategoryCard';

interface CategoriesListProps{
    categories:Category[]
    onCategoryClick:(name:string)=>void
}

function CategoriesList({categories,onCategoryClick}:CategoriesListProps) {
    return ( 
        <div className={styles.CategoriesList}>
            {categories.map((c,i)=><CategoryCard event={onCategoryClick} category={c} key={i}/>)}
        </div>
     );
}

export default CategoriesList;