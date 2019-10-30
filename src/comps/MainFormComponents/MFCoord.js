import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon, Button, Upload } from 'antd';
const {Dragger} =  Upload;
const props ={
    name: "file",
    multiple: true,
}
function Coord(){
    return(
        <div className="coord-panel">
            <h2>Распознавание координат</h2>
            <div className='coord-elem'>
                <p>Вырезанный фрагмент</p>
                <div className='coord-head-left'>
                     <Button style={{width:'45px', marginRight: '7px'}}><Icon type='undo'/></Button>
                     <Button style={{width:'45px'}}><Icon type='redo'/></Button>
                     <Button style={{width:'150px', position:'absolute', right: '0%'}}>Распознать</Button>
                </div>
                    <Dragger {...props} className='coord-drager'>
                        <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Перетащите сюда изображение таблицы координат, которое
                        надо распознать или вырежьте его из оригинала акта ЛПО</p>
                        {/* <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                        </p> */}
                    </Dragger>
            </div>
            <div className='coord-elem'>
                <p>Результат распознования</p>
                <div className='coord-head-left'>
                     <p>Тип координат Румбы/Линии</p>
                     <Button style={{width:'150px', position:'absolute', right:'0%'}}>Записать в таблицу</Button>
                </div>
                <div className="coord-result" style={{marginRight: '0px'}}>
                    <p>Результат распознавания появиться здесь, после нажатия кнопки "Распознать"</p>
                </div>
            </div>
        </div>
    )
}
export default Coord