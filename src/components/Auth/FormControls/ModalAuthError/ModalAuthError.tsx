import { useTypedDispatch } from "../../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { resetIsAuthError } from "../../../../store/slices/authSlice";
import ModalWindowError from "../../../UI/ModalWindow";
import styles from './ModalAuthError.module.scss'


function ModalAuthError() {
    const dispatch=useTypedDispatch()
    const {errorMessage}=useTypedSelector((state)=>state.auth)

    const onClose=()=>{
        dispatch(resetIsAuthError())
    }

    return ( 
        <>
            {
            errorMessage && <ModalWindowError className={styles.ModalAuthError} onClose={onClose}>
                <h3>Ошибка!!!</h3>
                <p>{errorMessage}</p>
            </ModalWindowError>
            }
        </>
     );
}

export default ModalAuthError;