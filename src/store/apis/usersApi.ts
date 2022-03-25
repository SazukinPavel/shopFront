import { UpdateUserDto } from './../../types/dto/update_user.dto';
import { UsersPaginationDto } from './../../types/pagination';
import { UserInfo } from './../../types/user';
import {createApi} from "@reduxjs/toolkit/query/react"
import { axiosBaseQuery } from "../../http"


export const usersApi=createApi({
    reducerPath:'usersApi',
    baseQuery:axiosBaseQuery({baseUrl:'users'}),
    tagTypes:['Users'],
    endpoints:(builder)=>({
        getUsersInfo:builder.query<UserInfo[],UsersPaginationDto>({
            query:({limit,page})=>({
                url:'',
                method:'get',
                params:{limit,page}
            }),providesTags:['Users']
        }),
        deleteUserById:builder.mutation<any,string>({
            query:(id)=>({
                url:'/'+id,
                method:'delete',
            }),invalidatesTags:['Users']
        }),
        updateUser:builder.mutation<any,UpdateUserDto>({
            query:(dto)=>({
                url:'/',
                data:dto,
                method:'put',
            }),invalidatesTags:['Users']
        })
    })
})

export const {useGetUsersInfoQuery,useDeleteUserByIdMutation,useUpdateUserMutation}=usersApi