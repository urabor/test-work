import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './comps.css'

function Head(){
    return(
        <div className='head-comp'> 
            <h2>Создание акта лесопатологического обследования</h2>
            <Button>
                Загрузить оригинал акта ЛПО
            </Button>
            <Button>
                Раскрыть окно просмотра документа
            </Button>
        </div>
    )
}
export default Head