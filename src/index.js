import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from './comps/LeftMenu'
import MainForm from './comps/MainForm'
import './index.css';

class App extends React.Component{

  render(){
  return(
    <div >
       < LeftMenu />
       <MainForm />
    </div>
  )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
