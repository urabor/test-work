import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

class LeftMenu extends React.Component{

  state= {
    collapsed: false,
  }
  
     toggleCollapsed = () => {
       this.setState({
          collapsed: !this.state.collapsed,
       })
      };

  render(){
  return(
    <div style={{width:256}}>
       <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
        >

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
              key="sub2"
              title={
                <span>
                  <Icon type="upload" />
                  <span>Navigation One</span>
                </span>
              }
            >
            </SubMenu>

            <SubMenu
              key="sub3"
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
    </div>
  )
  }
}
export default LeftMenu;