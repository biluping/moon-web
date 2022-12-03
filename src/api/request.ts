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
export function getMoonConfig(app:string){
    return request.get<any, any>('/config/app/' + app)
}