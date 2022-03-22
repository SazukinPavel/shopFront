import { NavLink } from 'react-router-dom';
import styles from './EmptyBasket.module.scss'

function EmptyBasket() {
    return ( 
        <div className={styles.EmptyBasket}>
            <h3>Корзина пуста.</h3>
            <NavLink to='/items'>Посмотреть все товары </NavLink>
        </div>
     );
}

export default EmptyBasket;