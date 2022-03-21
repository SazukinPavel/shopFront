import { createAsyncThunk } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { BasketPaginationSliceState } from './../../types/pagination';
import { createSlice } from '@reduxjs/toolkit';
import BasketService from '../../services/BasketService';

const initialState:BasketPaginationSliceState={page:0,limit:9,all:0}

export const basketPaginationSlice=createSlice({
    name:'basketPagination',
    initialState,
    reducers:{
        setBasketPage(state,action:PayloadAction<number>){
            state.page=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(getBasketItemCountThunk.fulfilled,(state,action)=>{
            state.all=action.payload
        })
    }

})

export const getBasketItemCountThunk=createAsyncThunk('getBasketItemCount',
async(_,{rejectWithValue})=>{
    try{
        const res=await BasketService.getBasketItemCount()
        if(res.status===200){
            return res.data
        }
        throw new Error('Some error!')
    }catch(e){
        return rejectWithValue(e)
    }
})

export const {setBasketPage}=basketPaginationSlice.actions