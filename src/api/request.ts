import request from "../utils/axios";

// 获取app列表
export function getAppList(){
    return request.get<String, Array<Object>>('/app');
}

// 获取对应app的配置
export function getMoonConfig(app:string){
    return request.get<any, any>('/config/app/' + app)
}