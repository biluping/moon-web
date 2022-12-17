import request from "../utils/axios";

// 获取app列表
export function getAppList(){
    return request.get<String, Array<MoonApp>>('/app');
}

// 创建 app
export function createOrUpdateApp(appid: string, appUrl: string){
    return request.post('/app', {appid, appUrl})
}

// 删除 app
export function delApp(appid: string){
    return request.delete('/app/'+appid)
}

// 获取对应app的配置
export function getMoonConfig(appId:string){
    return request.get<any, any>('/config/app/' + appId)
}

// 创建配置
export function saveConfig(appId:string, data: MoonConfig){
    return request.post('/config/save/'+appId, data)
}