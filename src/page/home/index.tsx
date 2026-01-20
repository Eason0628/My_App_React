import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import NavLeft from '../../components/navLeft';
import AppBreadCrumb from '../../components/breadCrumb/appBreadCrumb';
import AppHeader from '../../components/header';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <NavLeft />
      </Sider>

      <Layout>
        <Header style={{ paddingRight: "30px", background: colorBgContainer, textAlign: "right" }}>
          <AppHeader />
        </Header>

        <Content style={{ margin: '0 16px',height:"90vh",overflowY:"auto",overflowX:"hidden" }}>
          <AppBreadCrumb />
          <Outlet />   {/* 路由出口，用于渲染子路由组件 */}
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;