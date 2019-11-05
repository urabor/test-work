import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from './comps/LeftMenu'
import MainForm from './comps/MainForm'
import './index.css';
import { Layout } from 'antd';
import FormView from './comps/MainFormComponents/FormView'


const { Sider } = Layout;


class App extends React.Component{
  constructor(){
    super();
  this.state={
    collapsed: false,
  };

  //  this.docCollapsed=this.docCollapsed.bind(this);
  }
  docCollapsed=()=>{
     this.setState({collapsed: !this.state.collapsed});
     console.log('proshlo')
};

  render(){
  return(
    <Layout className='main-window'
    >
    
       < LeftMenu />
       <MainForm />
       
       <Sider collapsed={this.state.collapsed} collapsedWidth={0} width={'50%'} 
        style={{background:'#fff'}}
        >
            <FormView docCollapsed={()=> this.docCollapsed.bind(this)}  />
        </Sider>
   </Layout>
  )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
