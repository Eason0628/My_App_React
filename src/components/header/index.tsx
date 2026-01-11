import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { UserOutlined , PoweroffOutlined ,DownOutlined } from '@ant-design/icons';
const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" >
            个人中心
        </a>
      ),
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: (
        <a target="_blank" >
         退出登录
        </a>
      ),
      icon: <PoweroffOutlined />,
    },
    
  ];

function AppHeader() {
  return (
    <div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
export default AppHeader;
