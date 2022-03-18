import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps{
    message:string
    isActive:boolean
}

function ErrorMessage({message,isActive}:ErrorMessageProps) {
    return ( 
        <div className={!isActive?styles.ErrorMessage:styles.ErrorMessageActive}>
            <p>{message}</p>
        </div>
     );
}

export default ErrorMessage;