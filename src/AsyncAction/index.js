import React from 'react';
import {Form, Icon, Input, Button, Card, Table,Menu} from 'antd';
import {connect} from 'react-redux'
import {getData} from '../store/action'

import './index.less';
const FormItem = Form.Item;


class AsyncAction extends React.Component {

    handleSubmit=(e)=>{
        const {dispatch}=this.props
        e.preventDefault();
        const {form}=this.props
        console.log(this.props)
        form.validateFields((err, values) => {
            if(err) return;
            this.props.dispatch(getData(values.name))
        });
    }

    RenderDetail(profile){
        return <div>
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="1" >
                    mojombo
                </Menu.Item>
                <Menu.Item key="2" >
                    defunkt
                </Menu.Item>
                <Menu.Item key="3" >
                    pjhyett
                </Menu.Item>
                <Menu.Item key="4" >
                    wycats
                </Menu.Item>
                <Menu.Item key="5" >
                    ivey
                </Menu.Item>
                <Menu.Item key="6" >
                    evanphx
                </Menu.Item>
            </Menu>
                <div>
                    <img src={profile.avatar_url} width={200} height={200}/>
                    <p>{profile.name}</p>
                </div>
                <div className="info">
                    <ul>
                        <li>email: {profile.email}</li>
                        <li>created: {profile.created_at}</li>
                        <li>location: {profile.location}</li>
                        <li>blog: {profile.blog}</li>
                        <li>followers: {profile.followers}</li>
                        <li>following: {profile.following}</li>
                        <li>id: {profile.id}</li>
                        <li>repos: {profile.public_repos}</li>
                    </ul>
                </div>
            </div>

    }


    render() {
        const { getFieldDecorator } = this.props.form;

        const {profile}=this.props
        console.log(this.props)
        return (
            <Card border="none">
                <Form layout="inline" onSubmit={this.handleSubmit} style={{marginBottom:'30px',}}>
                    <FormItem label="姓名">

                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '输入姓名' ,max:20}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="姓名"/>
                        )}

                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">查询</Button>
                    </FormItem>
                </Form>
                {this.RenderDetail(profile)}

            </Card>
        );
    }
}


const WrappedAsyncAction = Form.create()(AsyncAction);

function mapStateToProps(state){
    return {
        isFetchData: state.isFetchData,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(WrappedAsyncAction)



