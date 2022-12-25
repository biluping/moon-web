import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://www.rabbit-cloud.top:10305',
    // baseURL: 'http://127.0.0.1:10305',
    timeout: 3000,
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default axiosInstance;