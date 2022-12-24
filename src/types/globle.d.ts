declare type MoonApp = {
    appid: string,
    host: string
}

declare type MoonConfig = {
    key: string,
    value: string
}

declare type MoonConfigVo = {
    key: string,
    value: string,
    appid: string,
    isPublish: boolean,
    updateTime: string
}

declare type NameSpaceVo = {
    name: string,
    id: number
}
