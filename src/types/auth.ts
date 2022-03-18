import { User } from './user';



export interface AuthSliceState{
    isAuth:boolean
    user:User | null
}