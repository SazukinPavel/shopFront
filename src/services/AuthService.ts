import $axios from "../http";
import AddUserDto from "../types/dto/add_user.dto";

export default class AuthService{
    public static checkToken(){
        return $axios.get('users/checkToken/')
    }

    public static login(dto:AddUserDto){
        return $axios.post('users/login/',dto)
    }

    public static register(dto:AddUserDto){
        return $axios.post('users/register/',dto)
    }
}