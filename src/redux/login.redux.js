/*
* 这个文件主要放置了，登录登出的逻辑
*
* */
// import axios from 'axios'
// import qs from 'qs'
/*
* 登录思路：
* 登录的时候请求接口，接口此时返回状态200 token 用户信息 或者返回404 500
* 这个时候我需要吧登录的token存起来
*
* */
//声明常量
const LOGIN ='LOGIN'
const LOGOUT = 'LOGOUT'

export const logins =(state={isAuth:false},action)=>{
    switch(action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        default:
            return state
    }
}



export const login=(user)=>{
    return {type:LOGIN}
}
export const logout=()=>{
    return {type:LOGOUT}
}