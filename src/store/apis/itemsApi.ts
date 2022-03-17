import {createApi} from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "../../http"
import { Item } from "../../types/item"
import { ItemsPaginationDto } from "../../types/pagination"


export const itemsApi=createApi({
    reducerPath:'itemsApi',
    baseQuery:axiosBaseQuery(),
    tagTypes:['Items'],
    endpoints:(builder)=>({
        getItems:builder.query<Item[],ItemsPaginationDto>({
            query:({limit,page})=>({
                url:'items/',
                method:'get',
                params:{limit,page}
            }),providesTags:['Items']
        })
    })
})


export const {useGetItemsQuery}=itemsApi