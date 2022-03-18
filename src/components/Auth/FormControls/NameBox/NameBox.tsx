import { UseFormRegister } from "react-hook-form";
import AddUserDto from "../../../../types/dto/add_user.dto";
import styles from './NameBox.module.scss'

interface NameBoxProps{
    register:UseFormRegister<AddUserDto>
}

function NameBox({register}:NameBoxProps) {
    return ( 
        <label className={styles.NameBox}>
            Имя пользователя:
            <input {...register('name',{required:'Имя обязательное поля',
            minLength:{value:4,message:'Имя должно быть длинее 4 символов'}})}/>
        </label>
     );
}

export default NameBox;