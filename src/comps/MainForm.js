import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import MFHead from './MainFormComponents/MFHead'
import MFInputInfo from './MainFormComponents/MFInputInfo'
import MFTablePlace from './MainFormComponents/MFTablePlace'
import MFCoord from './MainFormComponents/MFCoord'
import MFTableCoord from './MainFormComponents/MFTableCoord'
import FormView from './MainFormComponents/FormView'
import {Layout,Button } from 'antd';

const { Sider } = Layout;



class MainForm extends React.Component {
    state={
        collapsed: true,
        collapsedWidth: 0,
        width: 500,
        display: 'block',
        float: 'left' ,
    };
    styleDoc={
        display: 'none',
    };
    styleForm={
        float: 'none',
    }
    docCollapsed=()=>{
        // this.setState({collapsed: !this.state.collapsed}, ()=>{console.log(this.state.collapsed)});
       
        // this.styleDoc.display= 'block';
        // this.styleForm.float='left';
        
        // this.setState({styleDoc});
        // this.setState({styleForm});
    }
    
    render(){

        return(  
            <div>
                <Layout className='main-form'>
                    <MFHead  docCollapsed={()=>this.docCollapsed} />
                    <MFInputInfo />
                    <MFTablePlace />
                    <MFCoord />
                    <MFTableCoord />
                    <div>
                        <Button>
                            Очистить Форму
                        </Button>
                        <Button
                        type="primary"
                        style={{background: '#5858ef'}}
                        >
                            Сохранить
                        </Button>
                    </div>
                    {/* <Layout className='layout-doc'>
                    <   Sider  collapsed={this.state.collapsed}
                        collapsedWidth={0} width={this.state.width}>
                            <FormView />
                        </Sider>
                    </Layout> */}
                    
                </Layout>
                {/* <div
                  style={{display: 'none', position:'absolute' }}
                 > */}
                
                {/* </div> */}
            </div>
            
        );
}
}
export default MainForm