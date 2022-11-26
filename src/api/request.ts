import request from "../utils/axios";

export function getMoonConfig(app:string){
    return request.get<any, any>('/app/' + app)
}