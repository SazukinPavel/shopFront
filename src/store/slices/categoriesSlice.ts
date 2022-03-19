import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoriesService from "../../services/CategoriesService";
import { CategoriesSliceState } from "../../types/category";

const initialState:CategoriesSliceState={categories:[],isLoading:false}

export const fetchCategoriesThunk=createAsyncThunk('fetchCategoriesThunk',
async(_,{rejectWithValue})=>{
    try{
        const res=await CategoriesService.fetchCategories()
        if(res.status===200){
            return res.data
        }
        throw new Error('Some error')
    }catch(e){
        return rejectWithValue(e)
    }
})

export const categoriesSlice=createSlice({
    name:'categories',
    initialState,
    reducers:{
        
    },
    extraReducers:builer=>{
        builer.addCase(fetchCategoriesThunk.pending,(state)=>{
            state.isLoading=true
        })
        builer.addCase(fetchCategoriesThunk.fulfilled,(state,action)=>{
            state.categories=action.payload
            state.isLoading=false
        })
    }
})