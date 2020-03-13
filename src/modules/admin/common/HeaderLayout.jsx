import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function HeaderLayout() {
  return (
    <Header className="header">
      <div className="c-logo" />
      <Menu className="c-header-menu" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderLayout;
