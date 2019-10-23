import React from 'react';
import './App.css';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';


function App(){

  const { SubMenu } = Menu;

  
    let handleClick = e => {
    console.log('click ', e);
  };

  return(
    <Menu
    onClick={handleClick}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline">

       <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="search" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="upload" />
              <span>Navigation One</span>
            </span>
          }
        >
        </SubMenu>

        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="unordered-list" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>

    </Menu>
  )
}
export default App