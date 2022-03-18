

export interface Item{
    id:string
    name:string
    price:number
    img:string
    infos?:ItemInfo[]
}

export interface ItemInfo{
    name:string
    description:string
}