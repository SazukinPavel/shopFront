import { createAsyncThunk } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import CategoriesService from '../../services/CategoriesService';
import { itemsByCategoryPaginationSliceState } from './../../types/pagination';

const initialState:itemsByCategoryPaginationSliceState={limit:9,page:0,all:0,isError:false}

export const getItemsByCategoryCountThunk=createAsyncThunk<number,string>('getItemsByCategoryCount',
async(category:string,{rejectWithValue})=>{
    try{
        const res=await CategoriesService.getItemsCountByCategory(category)
        if(res.status===200){
            return res.data
        }
        throw new Error('Some went wrong')
    }catch(e){
        return rejectWithValue(e)
    }
})

export const itemsByCategoryPaginationSlice=createSlice({
    name:'itemsByCategoryPagination',
    initialState,
    reducers:{
        setItemsByCategoryPage(state,action:PayloadAction<number>){
            state.page=action.payload
        },
        setItemsByCategoryAll(state,action:PayloadAction<number>){
            state.all=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(getItemsByCategoryCountThunk.fulfilled,(state,action:PayloadAction<number>)=>{
            state.all=action.payload
        })
        builder.addCase(getItemsByCategoryCountThunk.rejected,(state)=>{
            state.isError=true
        })
    }
})

export const {setItemsByCategoryAll,setItemsByCategoryPage}=itemsByCategoryPaginationSlice.actions