import { UsersPaginationSliceState } from './../../types/pagination';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import ItemsService from "../../services/ItemsService"
import UsersService from '../../services/UsersService';

const initialState:UsersPaginationSliceState={page:0,limit:9,all:0}

export const setUsersCount=createAsyncThunk('setUsersCount',
async(_,{rejectWithValue})=>{
    try{
        const res=await UsersService.getItemsCount()
        if(res.status===200){
            return res.data-1
        }
        throw new Error('Cannot get count!')
    }catch(e){
        return rejectWithValue(e)
    }
})

export const usersPaginationSlice=createSlice({
    name:'usersPagination',
    initialState,
    reducers:{
        setUsersPage(state,action:PayloadAction<number>){
            state.page=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(setUsersCount.fulfilled,(state,action)=>{
            state.all=action.payload
        })
    }
})

export const {setUsersPage}=usersPaginationSlice.actions