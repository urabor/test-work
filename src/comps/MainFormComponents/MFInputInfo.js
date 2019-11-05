import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Input, Select } from 'antd';
import './comps.css'

function Info(){

    const { Option } = Select;
    const InputGroup = Input.Group;
    return(
        <div className='info-main'>
            <h3 >Общие сведения</h3>

        {/* <div size ='49%' className='info-main_left'> */}
        <InputGroup size ='49%' className='info-main_left'>
            <div className='info-main_elem-half'>
                <p >Дата акта</p>
                <DatePicker style={{ width:'100%', padding:0}} className='info-main_input'  />
            </div>

            <div className='info-main_elem-half'>
                <p>Номер акта</p>
                <Input className='info-main_input' style={{width: '100%'}} />
            </div>

            <div className='info-main_elem-full'>
                <p>Лесничество</p>
                <Select style={{width: "100%"}} placeholder='' >
                    <Option value="Лебединское">Лебединское</Option>
                    <Option value="Гусинское">Гусинское</Option>
                </Select>
            </div>
        </InputGroup>
            {/* </div> */}
       
            

        {/* <div className='info-main_right'> */}
        <InputGroup size='49%' className='info-main_right' >
            <div>
                <p>Субъект РФ</p>
                <Input className='info-main_input'  />
            </div>
            
            <div style={{paddingTop:'5px'}}>
                <p>Исполнитель работ по ЛПО</p>
                <Input  />
            </div>
        </InputGroup>
    </div>
    )
}
export default Info