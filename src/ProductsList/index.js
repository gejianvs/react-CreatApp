import React from 'react';
import {Form, Icon, Input, Button, Card, Table} from 'antd';
import {connect} from 'react-redux'


import './index.less';
const FormItem = Form.Item;


class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {form}=this.props
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
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
        }]
        const data = [{
            key: '1',
            name: '伟杰',
            email: '123456@qq.com'
        }, {
            key: '2',
            name: 'zhifeng',
            email: '666666@qq.com'
        }]

        const { getFieldDecorator } = this.props.form;


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


// export default ProductsList;
export default connect()(WrappedProductsList)



