import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useGetBack } from "../../../hooks/useGetBack";
import { useGoTo } from "../../../hooks/useGoTo";
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { loginThunk} from "../../../store/slices/authSlice";
import AddUserDto from "../../../types/dto/add_user.dto";
import Button from "../../UI/Button";
import ErrorMessage from "../FormControls/ErrorMessage";
import ModalAuthError from "../FormControls/ModalAuthError";
import NameBox from "../FormControls/NameBox";
import PasswordBox from "../FormControls/PasswordBox";
import styles from './Login.module.scss'

function Login() {

    const {register,handleSubmit,reset,formState:{errors,isValid}}=useForm<AddUserDto>({mode:'onBlur'})
    const dispatch=useTypedDispatch()
    const {isAuth}=useTypedSelector(state=>state.auth)
    const getBack=useGetBack()
    const goToItems=useGoTo('/items')

    const onSubmit=async(dto:AddUserDto)=>{
        await dispatch(loginThunk(dto))
    }

    useEffect(()=>{
        if(isAuth){
            reset()
            goToItems()
        }
    },[isAuth])


    return ( 
        <div className={styles.Login}>
            <h3>Авторизация</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                <NameBox register={register}/>
                <ErrorMessage isActive={!!errors.name} message={errors.name?.message ?? ""}/>
                <PasswordBox register={register}/>
                <ErrorMessage isActive={!!errors.password} message={errors.password?.message ?? ""}/>
                <div className={styles.Buttons}>
                    <Button  styleType='primary' type='button' onClick={getBack}>Назад</Button>
                    <Button styleType='warn' type='reset'>Очистить</Button>
                    <Button disabled={!isValid} styleType='sucess' type='submit'>Войти</Button>
                </div>
            </form>
            <ModalAuthError/>
            <p className={styles.Message}>Ещё нету аккаунта?<br/><NavLink to='/register'>Зарегистрироваться</NavLink></p>
        </div>
     );
}

export default Login;