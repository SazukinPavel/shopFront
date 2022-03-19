import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import ItemsService from "../../services/ItemsService"
import { itemsPaginationSliceState } from "../../types/pagination"

const initialState:itemsPaginationSliceState={page:0,limit:9,all:0}

export const setItemsCount=createAsyncThunk('setItemsCount',
async(_,{rejectWithValue})=>{
    try{
        const res=await ItemsService.getItemsCount()
        if(res.status===200){
            return res.data
        }
        throw new Error('Cannot get count!')
    }catch(e){
        return rejectWithValue(e)
    }
})

export const itemsPaginationSlice=createSlice({
    name:'itemsPagination',
    initialState,
    reducers:{
        setItemsPage(state,action:PayloadAction<number>){
            state.page=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(setItemsCount.fulfilled,(state,action)=>{
            state.all=action.payload
        })
    }
})

export const {setItemsPage}=itemsPaginationSlice.actions