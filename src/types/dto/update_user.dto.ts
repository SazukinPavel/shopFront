export interface UpdateUserDto{
    id:string
    name?:string
    role?:'ADMIN'|'USER'
}