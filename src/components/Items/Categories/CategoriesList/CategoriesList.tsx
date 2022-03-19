import { Category } from '../../../../types/category';
import styles from './CategoriesList.module.scss'
import CategoryCard from './CategoryCard';

interface CategoriesListProps{
    categories:Category[]
}

function CategoriesList({categories}:CategoriesListProps) {
    return ( 
        <div className={styles.CategoriesList}>
            {categories.map((c,i)=><CategoryCard {...c} key={i}/>)}
        </div>
     );
}

export default CategoriesList;