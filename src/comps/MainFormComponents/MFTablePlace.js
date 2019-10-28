import React from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag, Button, Select, Icon, Popconfirm } from 'antd';

const { Column, ColumnGroup } = Table;
const { Option } = Select;


class TablePlace extends React.Component {

    constructor(props){
        super(props);
        this.columns = [
            {
                title: 'Участок',
                dataIndex: 'uchastok',
                width: '25%',
                render: () =>
                 <span>{
                    <Select style={{width: "100%", border: 0}} placeholder='Лебединское'  >
                            <Option value="Лебединское">Лебединское</Option>
                            <Option value="Гусинское">Гусинское</Option>
                    </Select>
                } </span>,
              },
            {
                title:'Урочище(дача)',
                dataIndex: 'dacha',
                width: '20%',
                render: () =>
                 <span>{
                    <Select style={{width: "100%"}} placeholder='' >
                            <Option value="Лебединское">у моря</Option>
                            <Option value="Гусинское">море счастья</Option>
                    </Select>
                } </span>,
            },
            {
                title:'Квартал(ы)',
                dataIndex: 'kvartaly',
            },
            {
              title: 'Выдел(ы)',
              dataIndex: 'vydel',
            },
            {
                title: 'Площадь, га',
                dataIndex: 'ploshad',
              },
              {
                title: 'Инструменты',
                dataIndex: 'tools',
                render: (text, record ) => (
                    <span style={{position: 'absolute', right: '20%'}}>
                      <a href="" style={{padding: '8px'}} onClick={this.addRow} >
                           <Icon type="plus" />
                           </a>
                      <a href="" ><Popconfirm title="Sure to delete?" onConfirm={() =>  this.deleteRow(record.key)} >
                          
                          <Icon type="delete" /></Popconfirm>
                      </a>
                    </span>
                  )
              },
          ];
        
        this.state = 
        {
            data:
            [
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
                },
            ],
            count:2,
    }
}
    deleteRow = key =>{
        const dataSource = [...this.state.data];
        
        console.log(key)
        this.setState({ data: dataSource.filter(item => item.key !== key) });
        
    };
    addRow =() => { 
        const {count, data}= this.state;
        const newData = {
            key: count,
            uchastok: 'John',
            dacha: '-',
            kvartaly: 32,
            vydel: '10',
            ploshad: '6,9',
            tools: ''
        };
            this.setState({  data: [...data, newData],
            count: count+1,  }   );
    };
    
        
    render()
    {
        const columns = this.columns.map(col => {
            if (!col.editable) {
              return col;
            }
            return {
              ...col,
              onCell: record => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
              })
            };
          });
    return(
        <div>
            <h3>Место проведения</h3>
            <Table  columns={columns} dataSource={this.state.data} pagination={false} bordered={true} size={'small'} />
                {/* <Column title='Участковое лесничество' dataIndex="uchastok" key="uchastok"></Column>
                <Column title='Урочище (дача)' dataIndex="dacha" key="dacha"></Column>
                <Column title='Квартал(ы)' dataIndex="kvartaly" key="kvartaly"></Column>
                <Column title='Выдел(ы)' dataIndex="vydel" key="vydel"></Column>
                <Column title='Площадь, га' dataIndex="ploshad" key="ploshad"></Column>
                <Column title='Инструменты' dataIndex="tools" key="tools"></Column> */}

            {/* </Table> */}
            <Button
                onClick={this.addRow}
               type="primary" style={{ marginBottom: 16 }}>
                + Добавить строку
            </Button>
        </div>
    );
 }
}

// class TableGen extends React.Component{
//     render(){
//         return(
//         <div>
//             <Table dataSource={this.props.data} pagination={false} bordered={true} size={'small'}
//             columns={this.props.columns}/>
//         </div>
//         )
//     }
// }
export default TablePlace