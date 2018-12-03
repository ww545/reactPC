/*
* 这个文件主要放置了，登录登出的逻辑
*
* */
// import axios from 'axios'
// import qs from 'qs'

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
