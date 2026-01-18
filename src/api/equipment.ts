import { post } from "../util/http/request";

interface SearchData{
    name:string;
    person:string;
    page:number;
    pageSize:number
}

export function getEquipmentList(data:SearchData){
    return post("/equipmentList",data)
}