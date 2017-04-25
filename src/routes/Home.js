import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import { Link } from 'dva/router';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Detail from './Detail'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Home({ dispatch, home }) {
  console.log(home)
  var life = home.life.map((data) => {
    return(
      <Menu.Item key={data.id}>{data.introduction}</Menu.Item>
    )
  })
  var eat = home.eat.map((data) => {
    return(
      <Menu.Item key={data.id}>{data.introduction}</Menu.Item>
    )
  })
  var play = home.play.map((data) => {
    return(
      <Menu.Item key={data.id}>{data.introduction}</Menu.Item>
    )
  })
  const menuProps = {
    mode: "inline",
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    style: { height: '100%' },
    onClick(e) {
      dispatch({ type: "detail/update", payload: e.key})
    }
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/home">
            <Link to="/home"><Icon type="home" />Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/"><Icon type="logout" />logout</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>

          <Sider width={200} style={{ background: '#fff' }}>
            <Layout  style={{ flex: 1, background: '#fff' }}>
              <div className="TreeDIV">
                <Menu {...menuProps}>
                  <SubMenu key="sub1" title={<span><Icon type="user" />生活</span>}>
                    {life}
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />娱乐</span>}>
                    {play}
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />餐饮</span>}>
                    {eat}
                  </SubMenu>
                </Menu>
              </div>
            </Layout>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Layout  style={{ flex: 1, background: '#fff' }}>
              <div className="TreeDIV">
                <Detail/>
              </div>
            </Layout>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  );
}

function mapStateToProps({home}) {
  return {home};
}

export default connect(mapStateToProps)(Home);
