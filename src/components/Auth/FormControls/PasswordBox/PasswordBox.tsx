import { UseFormRegister } from "react-hook-form";
import AddUserDto from "../../../../types/dto/add_user.dto";
import styles from './PasswordBox.module.scss'

interface PasswordBoxProps{
    register:UseFormRegister<AddUserDto>
}

function PasswordBox({register}:PasswordBoxProps) {
    return ( 
        <label className={styles.PasswordBox}>
            Пароль:
            <input type='password' {...register('password',{required:'Пароль обязательное поле',
            minLength:{value:8,message:'Минимальная длина пароля 8 символов'}})}/>
        </label>
     );
}

export default PasswordBox;