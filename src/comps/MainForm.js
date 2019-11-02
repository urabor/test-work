import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import MFHead from './MainFormComponents/MFHead'
import MFInputInfo from './MainFormComponents/MFInputInfo'
import MFTablePlace from './MainFormComponents/MFTablePlace'
import MFCoord from './MainFormComponents/MFCoord'
import MFTableCoord from './MainFormComponents/MFTableCoord'
import {Layout } from 'antd';

import { Button } from 'antd';

function MainForm() {

    return(
        <Layout className='layout-main'>
            <MFHead />
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
        </Layout>
    );
}
export default MainForm