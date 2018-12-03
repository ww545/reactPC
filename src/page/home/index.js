import React from 'react';
import Rich from '../../content/lside/index'
import Head from '../../content/header/index'
import { Route , Switch } from 'react-router-dom';
import { Layout,Icon } from 'antd';
import MAPS from '../GPSmap/index'

const { Header, Footer, Sider, Content } = Layout;

 class Index extends React.Component{
     render(){
         return(
             <div>
                 <Layout>
                     <Sider>
                         <Rich />
                     </Sider>
                     <Layout>
                         <Header style={{ background: '#fff', padding: 0 }}>
                             <Head>
                                 <Icon
                                 className="trigger"
                                 type={ 'menu-fold'}
                             />
                          </Head>
                         </Header>
                         <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                               <Switch>
                                   <Route path="/" component={MAPS}/>
                               </Switch>
                         </Content>
                         <Footer style={{ background: '#fff', padding: 0 }}>Footer</Footer>
                     </Layout>
                 </Layout>

             </div>
         )
     }
 }

export default Index;