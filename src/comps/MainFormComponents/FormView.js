import React from 'react';
import 'antd/dist/antd.css';
import './comps.css'
import { Icon, Button, Upload } from 'antd';
const {Dragger}= Upload;


class FormView extends React.Component{

    
    //     super(props);
    //     this.docCollapsed = this.docCollapsed.bind(this);
    //   }
    //   docCollapsed(){
    //       console.log('j');
    //   }
    
    render(){
        
    return(
        <div>
            <div style={{paddingTop:'10px'}}>

                <h3 style={{display: 'inline-block'}}> Просмотр документа</h3>
            <Button onClick={()=> { return this.props.docCollapsed}} >
                <Icon style={{fontSize:'25px', display:'inline-block', position:'absolute', right:'5%', color:'#f79f69'}}            
                type="left-circle"/>
            </Button>
            </div>

            <Dragger  name={'file'} className='form-coord-drager'  >
                <p className="ant-upload-drag-icon">
                <a > <Icon type="inbox"  /></a>
                </p>
                <p className="ant-upload-text">Перетащите сюда изображение таблицы координат, которое
                надо распознать или вырежьте его из оригинала акта ЛПО</p>
            </Dragger>
        </div>
    );
 }
}
export default FormView;