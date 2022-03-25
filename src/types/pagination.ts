interface PaginationDto{
    limit:number
    page:number
}

interface DefaultPaginationSliceState{
    all:number
    page:number
    limit:number
}

export interface ItemsPaginationSliceState extends DefaultPaginationSliceState{

}

export interface ItemsByCategoryPaginationSliceState extends DefaultPaginationSliceState{
    isError:boolean
}

export interface UsersPaginationSliceState extends DefaultPaginationSliceState{

}

export interface BasketPaginationSliceState extends DefaultPaginationSliceState{
}

export interface ItemsPaginationDto extends PaginationDto{

}

export interface BasketPaginationDto extends PaginationDto{

}

export interface UsersPaginationDto extends PaginationDto{

}

export interface ItemsByCategoryPaginationDto extends PaginationDto{
    category:string
}