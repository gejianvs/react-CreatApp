import React from 'react';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import styles from './index.less';
import { Button,Layout, Menu, Icon, Tabs} from 'antd';
// import Products from '../routes/Products';
// import Detail from '../routes/Detail';


const {Sider, Content} = Layout;


class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        current: 'mail',
    }


    componentDidMount() {

    }

    handleClick = (e) => {
        const {match, history} = this.props;
        this.setState({
            current: e.key,
        });
    }

    render() {


        return (
            <Layout className={styles.layout}>
                <Sider className={styles.sider}>
                    <Menu mode="inline">
                        <Menu.Item key="products">
                            <Link to="/products"> <Icon type="mail"/>产品列表</Link>
                        </Menu.Item>
                        <Menu.Item key="detail">
                            <Link to="/detail"><Icon type="appstore"/>产品详情</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Button type="primary">primary</Button>
                    <Layout>

                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="products">
                                <Link to="/products"> <Icon type="mail"/>产品列表</Link>
                            </Menu.Item>
                            <Menu.Item key="detail">
                                <Link to="/detail"><Icon type="appstore"/>产品详情</Link>
                            </Menu.Item>
                        </Menu>
                        <Content>
                            {/*<Switch>*/}
                            {/*<Route path={`/products`}  component={Products}/>*/}
                            {/*<Route path={`/detail`}    component={Detail}/>*/}
                            {/*</Switch>*/}

                        </Content>
                    </Layout>
                </Content>

            </Layout>
        );
    }
}


export default IndexPage;


