import $axios from "../http";

export default class BasketService{

    public static getBasketItemCount(){
        return $axios.get<number>('users/basket/',{params:{count:true}})
    }

}