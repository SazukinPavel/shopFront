import $axios from "../http";

export default class UsersService{
    static getItemsCount(){
        return $axios.get<number>('users',{params:{count:true}})
    }
}