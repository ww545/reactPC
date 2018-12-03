import React from 'react';
import {Upload, message, Form, Icon, Input, Button, Checkbox, Spin, Select} from 'antd';
import axios from 'axios';

import SLE from './select'
import './userinfo.css'

const FormItem = Form.Item;
const Option = Select.Option;
const props = {
    name: 'image',
    action: 'http://localhost:8081/file_upload',
    headers: {
        authorization:"x-requested-with",

    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;

}

@Form.create()
class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: '',
            loading: false,
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
            console.log(this.state.imageUrl)
        }


    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const imageUrl = this.state.imageUrl;
        console.log(imageUrl)
        return (
            <div className="userInfobox">
                <div className="leftUser">
                    <ul className="leftUserUl">
                        <li className="cilickLeftLi">基本设置</li>
                        <li>安全设置</li>
                        <li>账号绑定</li>
                        <li>新消息通知</li>
                    </ul>
                </div>
                <div className="rightUser">
                    <div className="rightSizeL">
                        <span>基本设置</span>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem label="邮箱">
                                {getFieldDecorator('email', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input/>
                                )}
                            </FormItem>
                            <FormItem label="昵称">
                                {getFieldDecorator('name', {
                                    rules: [{required: true, message: 'Please input your Password!'}],
                                })(
                                    <Input/>
                                )}
                            </FormItem>
                            <FormItem label="个人简介">
                                {getFieldDecorator('profile', {
                                    rules: [{required: true, message: 'Please input your Password!'}],
                                })(
                                    <Input.TextArea rows={4}/>
                                )}
                            </FormItem>
                            <FormItem label="国家/地区">
                                {getFieldDecorator('country', {
                                    initialValue: 'China',
                                    rules: [{required: true, message: '输入国家'}],
                                })(
                                    <Select style={{maxWidth: 220}}>
                                        <Option value="China" key={"China"}>中国</Option>
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem label="所在省">
                                {getFieldDecorator('geographic', {
                                    initialValue: "",
                                    rules: [{required: true, message: '2'}],
                                })(<SLE/>)}
                            </FormItem>
                            <FormItem label="街道地址">
                                {getFieldDecorator('address', {
                                    initialValue: "",
                                    rules: [{required: true, message: '2'}],
                                })(<Input/>)}
                            </FormItem>
                            <FormItem label="联系电话">
                                {getFieldDecorator('phone', {
                                    initialValue: "",
                                    rules: [{required: true, message: '2'}],
                                })(<Input/>)}
                            </FormItem>
                        </Form>
                    </div>
                    <div className="rightSizeR">
                        <div>
                            头像
                        </div>
                        <div>
                            <img style={{width: 144, height: 144}}
                                 src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt=""/>
                        </div>
                        <div style={{marginTop: 20}}>
                            <Upload
                                {...props}
                                beforeUpload={beforeUpload}
                                showUploadList={false}
                                onChange={this.handleChange}
                            >
                                <Button>
                                    <Icon type="upload"/>更换头像
                                </Button>

                            </Upload>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserInfo;