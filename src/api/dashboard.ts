import { get } from "../util/http/request";

export function getEnergyData(){
    return get("/energyData")
}