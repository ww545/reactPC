import React from 'react';
import { Route , Switch,Redirect } from 'react-router-dom';

import Login from '../page/login/index'
import Auth from '../page/auth/index'

/*
* 构建思路
* 登录页面只有1个
* 主页面有一个，但是主页面分不同等级 1,2,3个等级
* 分别跳转到不同文件夹下的Home文件这样就需要统一验证来判断跳转
*
* */
export default class Router extends React.Component{
    render(){
        return(
                <Switch>
                    <Route path='/'   component={Auth} />
                    <Route path='/login'   component={Login} />
                    <Redirect to='/admin'/>
                </Switch>
        )
    }
}