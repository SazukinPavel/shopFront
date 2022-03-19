
export interface Category{
    count:number
    name:string
}

export interface CategoriesSliceState{
    categories:Category[],
    isLoading:boolean
}