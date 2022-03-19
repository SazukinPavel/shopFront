import $axios from "../http";



export default class ItemsService{
    static async getItemsCount(){
        return $axios.get<number>('items',{params:{count:true}})
    }
}