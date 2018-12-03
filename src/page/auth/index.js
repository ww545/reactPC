import React from 'react';

import  Admin from '../home/admin';
import  Home from '../home/home';
import  Index from '../home/index';


/*
* 在这里判断是否存在token
* type的类型 1 代表超级管理 2 直辖市 3区域 4用户
* 是否登录 当前url地址login不需要跳转
* */

 class Auth extends React.Component{
     constructor(props){
         super(props)
     }
     componentWillMount(){
         // if(1==0){
         //     this.props.history.push('/login')
         //     return null
         // }
     }
     render(){
         const test =1;
         const Left =   test==1? <Admin/>:test==2?<Home/>:test==3?<Index/>:null  ;
         return(
            <div>
                {Left}
            </div>
         )
     }
 }

export default Auth;
