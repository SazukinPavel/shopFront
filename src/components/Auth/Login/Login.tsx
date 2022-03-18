import { useForm } from "react-hook-form";
import AddUserDto from "../../../types/dto/add_user.dto";
import ErrorMessage from "../FormControls/ErrorMessage";
import NameBox from "../FormControls/NameBox";
import PasswordBox from "../FormControls/PasswordBox";
import styles from './Login.module.scss'

function Login() {

    const {register,handleSubmit,formState:{errors,isValid}}=useForm<AddUserDto>({mode:'onBlur'})

    const onSubmit=(dto:AddUserDto)=>{
        console.log(dto);   
    }

    return ( 
        <div className={styles.Login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <NameBox register={register}/>
                <ErrorMessage isActive={!!errors.name} message={errors.name?.message ?? ""}/>
                <PasswordBox register={register}/>
                <ErrorMessage isActive={!!errors.password} message={errors.password?.message ?? ""}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}

export default Login;