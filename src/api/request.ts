import request from "../utils/axios";

// 获取app列表
export function getAppList(){
    return request.get<String, Array<MoonApp>>('/app');
}

// 获取nameSpace列表
export function getNameSpaceList(appid:string){
    return request.get<String, Array<NameSpaceVo>>('/nameSpace/'+appid)
}

// 创建 app
export function createOrUpdateApp(appid: string, describe: string){
    return request.post('/app', {appid, describe})
}

// 删除 app
export function delApp(appid: string){
    return request.delete('/app/'+appid)
}

// 获取对应app的配置
export function getConfig(nameSpaceId:number){
    return request.get<number, Array<MoonConfigVo>>(`/config/getByNameSpaceId/${nameSpaceId}`)
}

// 创建配置
export function saveConfig(nameSpaceId:number, data: MoonConfig){
    return request.post('/config/save/'+nameSpaceId, data)
}

// 删除配置
export function delConfig(nameSpaceId:number, key:string){
    return request.delete(`/config/${nameSpaceId}/${key}`)
}

// 发布配置
export function publishConfig(nameSpaceId:number, keyList:Array<String>){
    return request.put(`/config/publish/${nameSpaceId}`, keyList)
}