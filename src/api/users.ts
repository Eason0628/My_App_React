import { post } from "../util/http/request";

interface LoginData {
  username: string,
  password: string,
}
export function login(data: LoginData){
    return post("/login", data);
}