import { ItemInfo } from "../../../../../types/item";
import styles from './DopInfoCard.module.scss'

function DopInfoCard({name,description}:ItemInfo) {
    return ( 
        <div className={styles.DopInfoCard}>
            <p>{name}</p>
            <p>{description}</p>
        </div>
     );
}

export default DopInfoCard;