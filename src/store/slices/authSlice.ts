import { User } from './../../types/user';
import { AuthSliceState } from './../../types/auth';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';
import { WritableDraft } from 'immer/dist/internal';
import AddUserDto from '../../types/dto/add_user.dto';

const initialState:AuthSliceState={isAuth:false,user:null}

export const checkTokenThunk=createAsyncThunk<User,void>('checkToken',
async(_,{dispatch,rejectWithValue})=>{
    try{
        const res=await AuthService.checkToken()
        if(res.status!==401){
            return res.data
        }
    }catch(e){
        return rejectWithValue(e)
    }
})

export const loginThunk=createAsyncThunk<User,AddUserDto>('login',
async(dto,{dispatch,rejectWithValue})=>{
    try{
        const res=await AuthService.login(dto)
        if(res.status!==401){
            localStorage.setItem('token',res.data.token)
            return res.data.user
        }
    }catch(e){
        return rejectWithValue(e)
    }
})

export const registerThunk=createAsyncThunk<User,AddUserDto>('register',
async(dto,{dispatch,rejectWithValue})=>{
    try{
        const res=await AuthService.register(dto)
        if(res.status!==401){
            localStorage.setItem('token',res.data.token)
            return res.data.user
        }
    }catch(e){
        return rejectWithValue(e)
    }
})

const login=(state:WritableDraft<AuthSliceState>,action:PayloadAction<User>)=>{
    state.isAuth=true;
    state.user=action.payload
}

const logout=(state:WritableDraft<AuthSliceState>)=>{
    state.isAuth=false;
    state.user=null
}

export const authSlice=createSlice({
     name:'auth',
     initialState,
     reducers:{},
     extraReducers:builder=>{
         builder.addCase(checkTokenThunk.fulfilled,login)
         builder.addCase(checkTokenThunk.rejected,logout)
         builder.addCase(registerThunk.fulfilled,login)
         builder.addCase(registerThunk.rejected,logout)
         builder.addCase(loginThunk.fulfilled,login)
         builder.addCase(loginThunk.rejected,logout)
     }
 })

