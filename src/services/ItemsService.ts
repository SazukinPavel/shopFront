import $axios from "../http";



export default class ItemsService{
    static getItemsCount(){
        return $axios.get<number>('items',{params:{count:true}})
    }
}