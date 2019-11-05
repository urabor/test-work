import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './comps.css'

class Head extends React.Component{
    render(){
    return(
        <div className='head-comp'> 
            <h2>Создание акта лесопатологического обследования</h2>
            <Button>
                Загрузить оригинал акта ЛПО
            </Button>
            <Button
              onClick={ () => this.props.docCollapsed}
              >
                Раскрыть окно просмотра документа
            </Button>

        </div>
    );
}
}
export default Head