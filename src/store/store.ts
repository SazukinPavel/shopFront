import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./apis/itemsApi";





export const store=configureStore({
    reducer:{
        [itemsApi.reducerPath]:itemsApi.reducer
    },
    middleware:(defaultFn)=>defaultFn().concat(itemsApi.middleware)
})