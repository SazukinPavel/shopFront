import { authSlice } from './slices/authSlice';
import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./apis/itemsApi";
import { itemsPaginationSlice } from './slices/itemsPaginationSlice';
import { categoriesSlice } from './slices/categoriesSlice';

export const store=configureStore({
    reducer:{
        [itemsApi.reducerPath]:itemsApi.reducer,
        auth:authSlice.reducer,
        itemsPagination:itemsPaginationSlice.reducer,
        categories:categoriesSlice.reducer
    },
    middleware:(defaultFn)=>defaultFn().concat(itemsApi.middleware)
})

export type RootState=ReturnType<typeof store.getState>
export type DispatchType=typeof store.dispatch