import { ItemsByCategoryPaginationDto } from './../../types/pagination';
import {createApi} from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "../../http"
import { Item } from "../../types/item"
import { ItemsPaginationDto } from "../../types/pagination"


export const itemsApi=createApi({
    reducerPath:'itemsApi',
    baseQuery:axiosBaseQuery({baseUrl:'items'}),
    tagTypes:['Items'],
    endpoints:(builder)=>({
        getItems:builder.query<Item[],ItemsPaginationDto>({
            query:({limit,page})=>({
                url:'',
                method:'get',
                params:{limit,page}
            }),providesTags:['Items']
        }),
        getItemById:builder.query<Item,string>({
            query:(id)=>({
                url:'/'+id,
                method:'get'
            }),providesTags:['Items']
        }),
        getItemsByCategory:builder.query<Item[],ItemsByCategoryPaginationDto>({
            query:({category,page,limit})=>({
                url:'/categories/'+category,
                method:'get',
                params:{page,limit}
            }),providesTags:['Items']
        })
    })
})

export const {useGetItemsQuery,useGetItemByIdQuery,useGetItemsByCategoryQuery}=itemsApi