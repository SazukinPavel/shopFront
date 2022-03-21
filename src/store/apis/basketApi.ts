import { BasketPaginationDto } from './../../types/pagination';
import { BasketItem } from './../../types/basket';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../http';
import { url } from 'inspector';
import AddToBasketDto from '../../types/dto/add_to_basket.dto';
import { doesNotReject } from 'assert';
import DeleteFromBasketDto from '../../types/dto/delete_from_basket.dto';


export const basketApi=createApi({
    reducerPath:'basketApi',
    tagTypes:['Basket'],
    baseQuery:axiosBaseQuery({baseUrl:'users/basket'}),
    endpoints:builder=>({
        getBasketItems:builder.query<BasketItem[],BasketPaginationDto>({
            query:({limit,page})=>({
                url:'',
                method:'get',
                params:{limit,page}
            }),providesTags:['Basket']
        }),
        addItemToBasket:builder.mutation<any,AddToBasketDto>({
            query:(dto)=>({
                url:'',
                method:'post',
                data:{...dto}
            }),invalidatesTags:['Basket']
        }),
        deleteFromBasket:builder.mutation<any,DeleteFromBasketDto>({
            query:({all,id})=>({
                url:'/'+id,
                params:{all},
                method:'delete'
            }),invalidatesTags:['Basket']
        })
    })
})

export const {useGetBasketItemsQuery,useAddItemToBasketMutation,useDeleteFromBasketMutation}=basketApi