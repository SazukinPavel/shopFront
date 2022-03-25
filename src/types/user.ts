

export interface User{
    id:string
    name:string
    role:'ADMIN'|'USER'
}

export interface UserInfo{
    name:string
    role:'ADMIN'|'USER'
    id:string
    basketItemCount:number
}