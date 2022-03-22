import { BasketPaginationDto } from './../../types/pagination';
import { BasketItem } from './../../types/basket';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../http';
import AddToBasketDto from '../../types/dto/add_to_basket.dto';
import DeleteFromBasketDto from '../../types/dto/delete_from_basket.dto';
import BasketAllPriceAndCountDto from '../../types/dto/basket_allPrice&Count.dto';
import { url } from 'inspector';

export const basketApi=createApi({
    reducerPath:'basketApi',
    tagTypes:['Basket','BasketItem'],
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
            }),invalidatesTags:['Basket','BasketItem']
        }),
        deleteFromBasket:builder.mutation<any,DeleteFromBasketDto>({
            query:({all,id})=>({
                url:'/'+id,
                params:{all},
                method:'delete'
            }),invalidatesTags:['Basket']
        }),
        getBasketAllPriceAndCount:builder.query<BasketAllPriceAndCountDto,null>({
            query:()=>({
                url:'',
                method:'get',
                params:{allPrice:true}
            }),providesTags:['Basket']
        }),
        getBasketItemKolvo:builder.query<number,string>({
            query:(id)=>({
                url:'/'+id,
                method:'get',
                params:{kolvo:true}
            }),providesTags:['BasketItem']
        })
    })
})

export const {useGetBasketItemKolvoQuery,useGetBasketItemsQuery,useAddItemToBasketMutation,useDeleteFromBasketMutation,useGetBasketAllPriceAndCountQuery}=basketApi