import React from 'react';
import Rich from '../../content/lside/index'
import Head from '../../content/header/index'
import { Route , Switch,withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Chart from '../charts/index'
import Richs from '../rich/index'
import Permission from '../Permission/index'
import MAPS from '../GPSmap/index'
import UsesInfo from '../userInfo/index'

import '../../index.css'

const { Header, Footer, Sider, Content } = Layout;
const menuName = [
    {
        "menu_title": [
            "信息列表", "bars"
        ],
        "menus_text": [
            {
                "key": "导航1",
                "text": "导航1",
                "links": "/admin"
            }
        ]
    },
    {
        "menu_title": [
            "管理设置", "setting"
        ],
        "menus_text": [
            {
                "key": "1",
                "text": "地图",
                "links": "/admin/map"
            },
            {
                "key": "2",
                "text": "权限管理",
                "links": "/admin/permission"
            },
            {
                "key": "3",
                "text": "发布信息",
                "links": "/admin/rich"
            } ,
            {
                "key": "4",
                "text": "个人信息",
                "links": "/admin/userinfo"
            }
        ]
    }
]

class Admin extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if(  localStorage.getItem("user")!=="admin"){
            this.props.history.push('/login');
            return null
        }
    }
    render(){
console.log(this.props)
        return(
            <div>
                <Layout>
                    <Sider width={256}>  <Rich  menuName={menuName}></Rich></Sider>
                    <Layout >
                        <Header className="allHeader">  <Head></Head></Header>
                        <Content  className="allContent">
                            <Switch>
                                <Route  path="/admin/" exact   component={Chart}/>
                                <Route path="/admin/map" component={MAPS}/>
                                <Route path="/admin/permission" component={Permission}/>
                                <Route path="/admin/rich" component={Richs}/>
                                <Route path="/admin/userinfo" component={UsesInfo}/>
                            </Switch>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>

            </div>
        )
    }
}

export default Admin;