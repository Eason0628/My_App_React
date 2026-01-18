import { post } from "../util/http/request";
export function getRoomList(roomid:string){
    return post("/roomList",{roomid})
}