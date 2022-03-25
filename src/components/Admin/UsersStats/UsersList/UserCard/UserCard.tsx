import { useDeleteUserByIdMutation, useUpdateUserMutation } from "../../../../../store/apis/usersApi";
import { UserInfo } from "../../../../../types/user";
import Button from "../../../../UI/Button";
import styles from './UserCard.module.scss'


function UserCard({name,basketItemCount,role,id}:UserInfo) {

    const [deleteUser,{}]=useDeleteUserByIdMutation()
    const [updateUser,{}]=useUpdateUserMutation()

    const onDelete=()=>{
        deleteUser(id)
    }

    const onRoleChange=()=>{
        updateUser({id,role:role==='ADMIN'?'USER':'ADMIN'})
    }

    return ( 
        <div className={styles.UserCard}>
            <p>{name}</p>
            <p>Товаров в корзине:{basketItemCount}</p>
            <p>Роль:{role}</p>
            <Button onClick={onDelete} styleType='warn'>Удалить</Button>
            <Button styleType='primary' onClick={onRoleChange}>{role==='USER'?'Сделать админом':'Сделать пользователем'}</Button>
        </div>
     );
}

export default UserCard;