import React from 'react';
import {withRouter} from 'react-router-dom'
import  Admin from '../home/admin';
import  Home from '../home/home';
import  Index from '../home/index';


/*
* 在这里判断是否存在token
* type的类型 1 代表超级管理 2 直辖市 3区域 4用户
* 是否登录 当前url地址login不需要跳转
* */
@withRouter
 class Auth extends React.Component{
     constructor(props){
         super(props)
     }
     componentWillMount(){
         if(  localStorage.getItem("user")!=="admin"){
             this.props.history.push('/login');
             return null
         }
         // if(this.props.match.path==='/'){
         //     this.props.history.push('/admin');
         // }
     }
     render(){
         return null
     }
 }

export default Auth;
