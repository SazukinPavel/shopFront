

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

export interface ItemsPaginationDto extends PaginationDto{

}