import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Input, Select } from 'antd';
import './comps.css'

function Info(){

    const { Option } = Select;
    return(
        <div className='info-main'>
            <h3>Общие сведения</h3>

        <div className='info-main_left'>
            <div>
                <p >Дата акта</p>
                <DatePicker style={{padding: 0}} className='info-main_input'  />
            </div>

            <div>
                <p>Номер акта</p>
                <Input className='info-main_input' style={{width: '200px'}} />
            </div>

            <div>
                <p>Лесничество</p>
                <Select className='info-main_input' style={{ width: "200px" }}>
                    <Option value="первое">Первое</Option>
                    <Option value="второе">Второе</Option>
                </Select>
            </div>
        </div>
            

        <div className='info-main_right'>
            <div>
                <p>Субъект РФ</p>
                <Input className='info-main_input' style={{width: '400px'}}  />
            </div>
            
            <div>
                <p>Исполнитель работ по ЛПО</p>
                <Input style={{width: '400px'}}  />
            </div>
        </div>
    </div>
    )
}
export default Info