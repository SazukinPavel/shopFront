interface PaginationDto{
    limit:number
    page:number
}

interface DefaultPaginationSliceState{
    all:number
    page:number
    limit:number
}

export interface itemsPaginationSliceState extends DefaultPaginationSliceState{

}

export interface itemsByCategoryPaginationSliceState extends DefaultPaginationSliceState{
    isError:boolean
}

export interface ItemsPaginationDto extends PaginationDto{

}

export interface ItemsByCategoryPaginationDto extends PaginationDto{
    category:string
}