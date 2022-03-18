import { useForm } from "react-hook-form";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { registerThunk } from "../../../store/slices/authSlice";
import AddUserDto from "../../../types/dto/add_user.dto";
import Button from "../../UI/Button";
import ErrorMessage from "../FormControls/ErrorMessage";
import NameBox from "../FormControls/NameBox";
import PasswordBox from "../FormControls/PasswordBox";
import styles from './Register.module.scss'

function Register() {
    const {register,handleSubmit,formState:{errors,isValid}}=useForm<AddUserDto>({mode:'onBlur'})

    const dispatch=useTypedDispatch()

    const onSubmit=(dto:AddUserDto)=>{
        dispatch(registerThunk(dto))
    }

    return ( 
        <div className={styles.Register}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <NameBox register={register}/>
                <ErrorMessage isActive={!!errors.name} message={errors.name?.message ?? ""}/>
                <PasswordBox register={register}/>
                <ErrorMessage isActive={!!errors.password} message={errors.password?.message ?? ""}/>
                <Button styleType='sucess' type='submit'>Зарегистрироваться</Button>
            </form>
        </div>
     );
}

export default Register;