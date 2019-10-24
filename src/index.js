import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from './comps/LeftMenu'
import MainForm from './comps/MainForm'
import './index.css';
import { Layout } from 'antd';

class App extends React.Component{

  render(){
  return(
    <Layout 
      style={{height: '100%'}}
    >
       < LeftMenu 
       />
       <MainForm />
    </Layout>
  )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
