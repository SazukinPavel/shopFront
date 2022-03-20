import $axios from "../http";
import { Category } from "../types/category";



export default class CategoriesService{
    static async fetchCategories(){
        return $axios.get<Category[]>('items/categories',{params:{withCount:true}})
    }
    
    static async getItemsCountByCategory(category:string){
        return $axios.get<number>('items/categories/'+category,{params:{count:true}})
    }
}