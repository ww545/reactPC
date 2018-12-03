import React from 'react';
import Rich from '../../content/lside/index'
import Head from '../../content/header/index'
import { Route , Switch } from 'react-router-dom';

import { Layout,Icon } from 'antd';
import MAPS from '../GPSmap/index'
import Richs from '../rich/index'
import UsesInfo from '../userInfo/index'

import '../../index.css'
const { Header, Footer, Sider, Content } = Layout;
const menuName = [
    {
        "menu_title": [
            "菜单一", "mail"
        ],
        "menus_text": [
            {
                "key": "1",
                "text": "倒是民航1",
                "links": "/"
            },
            {
                "key": "2",
                "text": "倒是民航2",
                "links": "/admin/map"
            }
        ]
    },
    {
        "menu_title": [
            "菜单二", "mail"
        ],
        "menus_text": [
            {
                "key": "1",
                "text": "倒是民航23",
                "links": "/admin/permission"
            },
            {
                "key": "2",
                "text": "倒是民航24",
                "links": "/"
            }
        ]
    }
]
class Home extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Sider>
                        <Rich menuName={menuName}/>
                    </Sider>
                    <Layout>
                        <Header className="allHeader">
                            <Head>
                                <Icon
                                    className="trigger"
                                    type={ 'menu-fold'}
                                />
                            </Head>
                        </Header>
                        <Content className="allContent">
                            <Switch>
                                <Route path="/admin" exact component={MAPS}/>
                                <Route path="/admin/rich" component={Richs}/>
                            </Switch>
                        </Content>
                        <Footer style={{ background: '#fff', padding: 0 }}>Footer</Footer>
                    </Layout>
                </Layout>

            </div>
        )
    }
}

export default Home;