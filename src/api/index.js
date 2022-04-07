// API进行统一管理
import requests from "./request";

// 三级联动的接口   
// 如 /api/product/getBaseCategoryList  get 无参数
// 发请求：axios发请求结果返回Promise对象
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

export const reqLogin = (data) => requests({
    url: '/auth/login',
    method: 'post',
    data: data,
})

export const reqRegister = (data) => requests({
    url: '/auth/register',
    method: 'post',
    data: data,
})

export const reqInfo = () => requests({
    url: '/auth/info',
    method: 'get',
})