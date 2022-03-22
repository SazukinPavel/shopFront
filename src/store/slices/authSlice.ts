import { User } from './../../types/user';
import { AuthSliceState } from './../../types/auth';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from '../../services/AuthService';
import { WritableDraft } from 'immer/dist/internal';
import AddUserDto from '../../types/dto/add_user.dto';

const initialState:AuthSliceState={isAuth:false,user:null,errorMessage:null}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
       logout(state){
           state.isAuth=false;
           state.user=null
           localStorage.removeItem('token')
       },
       reseterrorMessage(state){
           state.errorMessage=null
       }
    },
    extraReducers:builder=>{
        builder.addCase(checkTokenThunk.fulfilled,login)
        builder.addCase(checkTokenThunk.rejected,logout)
        builder.addCase(registerThunk.pending,onPending)
        builder.addCase(registerThunk.fulfilled,login)
        builder.addCase(registerThunk.rejected,(state,action)=>{
            state.errorMessage=action.payload as string ?? 'Что-то пошло не так.'
            state.isAuth=false
            state.user=null
        })
        builder.addCase(loginThunk.pending,onPending)
        builder.addCase(loginThunk.fulfilled,login)
        builder.addCase(loginThunk.rejected,(state,action)=>{
            state.errorMessage=action.payload as string ?? 'Что-то пошло не так.'
            state.isAuth=false
            state.user=null
        })
    }
})

export const checkTokenThunk=createAsyncThunk<User,void>('checkToken',
async(_,{rejectWithValue})=>{
    try{
        const res=await AuthService.checkToken()
        return res.data
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})

export const loginThunk=createAsyncThunk<User,AddUserDto>('login',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.login(dto)
        localStorage.setItem('token',res.data.token)
        return res.data.user
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})

export const registerThunk=createAsyncThunk<User,AddUserDto>('register',
async(dto,{rejectWithValue})=>{
    try{
        const res=await AuthService.register(dto)
        localStorage.setItem('token',res.data.token)
        return res.data.user
    }catch(e:any){
        return rejectWithValue(e.response.data.message)
    }
})


const login=(state:WritableDraft<AuthSliceState>,action:PayloadAction<User>)=>{
    state.isAuth=true;
    state.errorMessage=null;
    state.user=action.payload
}

const logout=(state:WritableDraft<AuthSliceState>)=>{
    state.isAuth=false;
    state.user=null
    state.errorMessage=null;
}

const onReject=(state:WritableDraft<AuthSliceState>,action:PayloadAction<Error>)=>{
    state.isAuth=false;
    state.user=null
    state.errorMessage=action.payload.message;
}

const onPending=(state:WritableDraft<AuthSliceState>)=>{
    state.errorMessage=null
}



export const {logout:logoutUser,reseterrorMessage:resetIsAuthError}=authSlice.actions