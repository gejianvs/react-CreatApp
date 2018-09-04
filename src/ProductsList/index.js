import React from 'react';
import {Form, Icon, Input, Button, Card, Table} from 'antd';
import {connect} from 'react-redux'
import  {addTodo,deliteTodo} from '../store/action'

import './index.less';
const FormItem = Form.Item;
const Fragment=React.Fragment


class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props)
    }

    handleSubmit = (e) => {
        const {dispatch}=this.props
        e.preventDefault();
        const {form}=this.props
        console.log(this.props)
        form.validateFields((err, values) => {
           if(err) return;
           dispatch(addTodo(values))
            form.resetFields()
        });
    }

   delite=(key)=>{
        console.log(key)
        const {dispatch}=this.props
       dispatch(deliteTodo(key))
   }



    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },{
            title:'操作',
            render:(record)=>{
                return(<div onClick={this.delite.bind(null,record.key)}>删除</div>)
            }
        }]


        const { getFieldDecorator } = this.props.form;
        const{data}=this.props


        return (
            <Card border="none">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem label="姓名">

                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '输入姓名' ,max:20}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="姓名"/>
                        )}

                    </FormItem>
                    <FormItem label="邮箱">
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: '请输入邮箱' ,type:'email'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="邮箱"/>
                        )}

                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">添加</Button>
                    </FormItem>
                </Form>
                <Table columns={columns} dataSource={data} style={{marginTop: '50px'}}></Table>
            </Card>
        );
    }
}


const WrappedProductsList = Form.create()(ProductsList);


const mapStateToProps = state => {
    return {
        data:state.reducer
    }

}


export default connect(mapStateToProps)(WrappedProductsList)



