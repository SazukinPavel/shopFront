import { basketApi } from './apis/basketApi';
import { itemsByCategoryPaginationSlice } from './slices/itemsByCategoryPaginationSlice';
import { authSlice } from './slices/authSlice';
import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./apis/itemsApi";
import { itemsPaginationSlice } from './slices/itemsPaginationSlice';
import { categoriesSlice } from './slices/categoriesSlice';
import { basketPaginationSlice } from './slices/basketPaginationSlice';

export const store=configureStore({
    reducer:{
        [itemsApi.reducerPath]:itemsApi.reducer,
        auth:authSlice.reducer,
        itemsPagination:itemsPaginationSlice.reducer,
        categories:categoriesSlice.reducer,
        categoriesPagination:itemsByCategoryPaginationSlice.reducer,
        [basketApi.reducerPath]:basketApi.reducer,
        basketPagination:basketPaginationSlice.reducer,

    },
    middleware:(defaultFn)=>defaultFn().concat(itemsApi.middleware).concat(basketApi.middleware)
})

export type RootState=ReturnType<typeof store.getState>
export type DispatchType=typeof store.dispatch