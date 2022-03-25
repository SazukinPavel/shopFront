import { NavLink } from 'react-router-dom';
import styles from './EmptyPage.module.scss'

interface EmptyPageProps{
    message:string
    linkMessage:string
    link:string
}

function EmptyPage({message,link,linkMessage}:EmptyPageProps) {
    return ( 
        <div className={styles.EmptyPage}>
            <h3>{message}</h3>
            <NavLink to={link}>{linkMessage}</NavLink>
        </div>
     );
}

export default EmptyPage
;