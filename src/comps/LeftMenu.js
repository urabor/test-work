import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Menu, Icon, Button, Layout } from 'antd';

const { SubMenu } = Menu;
const {  Sider } = Layout;

class LeftMenu extends React.Component{

  state= {
    collapsed: true,
  }
  
     toggleCollapsed = () => {
       
       this.setState({
          collapsed: !this.state.collapsed,
       })
      };

  render(){
  return(
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}
      style={{float: 'left'}}
      >

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

            <Menu.Item
                key="sub1"
                
              ><Icon type="search" />
              </Menu.Item>
              <Menu.Item
                key="sub2"
              ><Icon type="upload" />
              </Menu.Item>

              <Menu.Item
                key="sub3"
              > <Icon type="unordered-list" />
              </Menu.Item>

              <Menu.Item key="sub4">
                <Icon type="file" />
              </Menu.Item>

              <Menu.Item key="sub5">
                <Icon type="cloud-download" />
              </Menu.Item>

              <Menu.Item key="sub6">
               <Icon type="mail" />
              </Menu.Item>

              <Menu.Item key="sub7">
                ЛПО
              </Menu.Item>

          </Menu>
      </Sider>
  )
  }
}
export default LeftMenu;