import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useGetBack } from "../../../hooks/useGetBack";
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
    const getBack=useGetBack()

    return ( 
        <div className={styles.Register}>
            <h3>Регистрация</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                <NameBox register={register}/>
                <ErrorMessage isActive={!!errors.name} message={errors.name?.message ?? ""}/>
                <PasswordBox register={register}/>
                <ErrorMessage isActive={!!errors.password} message={errors.password?.message ?? ""}/>
                <div className={styles.Buttons}>
                    <Button styleType='primary' type='button' onClick={getBack}>Назад</Button>
                    <Button styleType='warn' type='reset'>Очистить</Button>
                    <Button styleType='sucess' disabled={!isValid} type='submit'>Войти</Button>
                </div>
            </form>
            <p className={styles.Message}>Уже есть аккаунт?<br/><NavLink to='/login'>Войти</NavLink></p>
        </div>
     );
}

export default Register;