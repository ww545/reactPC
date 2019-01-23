import React from 'react';
import {connect} from 'react-redux'
import {login} from '../../redux/login.redux'
import { Form, Icon, Input, Button } from 'antd';

import './index.css';

const FormItem = Form.Item;
@connect(
    state=>state,
    {login}
)

 class Login extends React.Component{
     handleSubmit = (e) => {

         this.props.login(e)
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 if(values.userName==="admin"){
                 //   跳转到权限页面存储type
                     localStorage.setItem("user","admin")
                     this.props.history.push('/admin');
                 }

                 console.log('Received values of form: ', values);

             }

         });
     }

     render() {
         const { getFieldDecorator } = this.props.form;
         return (
            <div className="bgImg">
                <div className="bghead">
                    沐小白 copy@后台管理系统
                </div>
                <div className="leftText">
                    曾经走过的路<br/>
                    都是我们坚强的理由
                </div>
                <div className="contents">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="loginTitle">
                            后台管理
                        </div>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </FormItem>
                    </Form>

                </div>
                <div className="bgfoter">

                    <span>统一密码：123123</span>
                    <span>账号等级：admin super</span>
                    <span>账号等级：admin01 直辖</span>
                    <span>账号等级：admin02 辖区</span>
                    <span>账号等级：admin03 用户</span>
                </div>
            </div>
         );
     }
 }
const Logins = Form.create()(Login);
export default Logins;