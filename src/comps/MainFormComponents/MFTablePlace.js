import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag, Button } from 'antd';

const { Column, ColumnGroup } = Table;
const data = [
    {
      key: '1',
      uchastok: 'John',
      dacha: '-',
      kvartaly: 32,
      vydel: '10',
      ploshad: '6,9',
      tools: ''
    },
    {
        key: '2',
        uchastok: 'John',
        dacha: '-',
        kvartaly: 32,
        vydel: '10',
        ploshad: '6,9',
        tools: ''
    }
];
function TablePlace() {
    return(
        <div>
            
            <Table dataSource={data}>
                <Column title='Участковое лесничество' dataIndex="uchastok" key="uchastok"></Column>
                <Column title='Урочище (дача)' dataIndex="dacha" key="dacha"></Column>
                <Column title='Квартал(ы)' dataIndex="kvartaly" key="kvartaly"></Column>
                <Column title='Выдел(ы)' dataIndex="vydel" key="vydel"></Column>
                <Column title='Площадь, га' dataIndex="ploshad" key="ploshad"></Column>
                <Column title='Инструменты' dataIndex="tools" key="tools"></Column>

            </Table>
            <Button
            //   onClick={this.handleAdd}
               type="primary" style={{ marginBottom: 16 }}>
                Добавить строку
            </Button>
        </div>
    );
}
export default TablePlace