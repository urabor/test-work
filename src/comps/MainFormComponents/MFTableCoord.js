import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon, Button, Table, Select, Popconfirm } from 'antd';

const { Option } = Select;

class TableCoord extends React.Component{
    constructor(props){
        super(props);
        this.columns1 = [
            
            {
                title:'##',
                dataIndex: 'num',
            },
            {
              title: 'Широта',
              dataIndex: 'shirota',
            },
            {
                title: 'Долгота',
                dataIndex: 'dolgota',
              },
              {
                title: 'Инструменты',
                dataIndex: 'tools',
                render: (text, record ) => (
                    <span style={{position: 'absolute', right: '20%'}}>
                      <a  style={{padding: '8px'}} onClick={this.addRow} >
                           <Icon type="plus" />
                           </a>
                      <a  ><Popconfirm title="Sure to delete?" onConfirm={() =>  this.deleteRow(record.key)} >
                          
                          <Icon type="delete" /></Popconfirm>
                      </a>
                    </span>
                  )
              },
          ];
          this.columns2 = [
            
            {
                title:'##',
                dataIndex: 'num',
            },
            {
              title: 'Шир',
              dataIndex: 'shirota',
            },
            {
                title: 'Бегинс',
                dataIndex: 'dolgota',
              },
              {
                title: 'flex',
                dataIndex: 'flex',
              },
              {
                title: 'Инструменты',
                dataIndex: 'tools',
                render: (text, record ) => (
                    <span style={{position: 'absolute', right: '20%'}}>
                      <a  style={{padding: '8px'}} onClick={this.addRow} >
                           <Icon type="plus" />
                           </a>
                      <a  ><Popconfirm title="Sure to delete?" onConfirm={() =>  this.deleteRow(record.key)} >
                          
                          <Icon type="delete" /></Popconfirm>
                      </a>
                    </span>
                  )
              },
          ];
      
          this.state1 = 
          {
              data:
              [
                  {
                  key: '1',
                  num: 1,
                  shirota: 33.5,
                  dolgota: 32,
                  flex: '',
                  tools: ''
                  },
                  {
                    key: '2',
                    num: 2,
                    shirota: 33.5,
                    dolgota: 32,
                    flex: '',
                    tools: ''
                    },
              ],
              count:2,
              newData: {
                key: 9,
                num: 0,
                shirota: 33.5,
                dolgota: 32,
                flex: '',
                tools: ''
              },
      };
      this.state2 = 
          {
              data:
              [
                  {
                  key: '1',
                  num: 1,
                  shirota: 33.5,
                  dolgota: 32,
                  tools: ''
                  },
                  {
                    key: '2',
                    num: 2,
                    shirota: 33.5,
                    dolgota: 32,
                    tools: ''
                    },
              ],
              count:2,
              newData:`{
                key: this.state2.count,
                num: this.state2.count,
                shirota: 33.5,
                dolgota: 32,
                tools: ''
              }`
            ,
      };
      this.current= 'gg';
    }
      deleteRow = key =>{
        const dataSource = [...this.state.data];
        
        console.log(key)
        this.setState({ data: dataSource.filter(item => item.key !== key) });
        
    };
    addRow =() => { 
        let i = 1; let state;
        if(this.current=='gg'){
            i=1; state = this.state1;
        }
        if(this.current=='mm'){
            i=2; state = this.state2;
        }
        const {count, data}= state;
        
        // const newData = Object.assign({},this[`state${i}`].newData);
        const newData = Object.assign({},state.newData);
            this.setState({  data: [...data, newData],
            count: count+1,  }   );
    };


    handleClick = e => {
        
        // this.setState({
        //   current: e.key,
        // });
        this.current = e.key;
        // console.log(this.dataRef)
      };
    render(){
        let colomnRef;
        let dataRef;
        let dataR= ()=>{
        if(this.current==='gg'){
            this.colomnRef=this.columns1;
            this.dataRef=this.state1.data;
            console.log(this.colomnRef)
        }
        else if(this.current==='mm'){
            this.colomnRef=this.columns2;
            this.dataRef=this.state2.data;
        }
        else if(this.current==='az'){
            colomnRef=this.columns1;
            dataRef=this.state1.data;
        }
        else if(this.current==='rum'){
            colomnRef=this.columns2;
            dataRef=this.state2.data;
        }
    };

        const columns = colomnRef.map(col => {
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
      

        //  columns = this.columns.map(col => {
        //     if (!col.editable) {
        //       return col;
        //     }
        //     return {
        //       ...col,
        //       onCell: record => ({
        //         record,
        //         editable: col.editable,
        //         dataIndex: col.dataIndex,
        //         title: col.title,
        //       })
        //     };
        //   });
    return(
        <div>
            <Menu onClick={this.handleClick, this.dataR} selectedKeys={[this.current]} mode='horizontal'>
                <Menu.Item key='gg'>ГГ, ГГГГГ</Menu.Item>
                <Menu.Item key='mm'>ГГ ММ СС.с</Menu.Item>
                <Menu.Item key='az'>Азимуты</Menu.Item>
                <Menu.Item key='rum'>Румбы</Menu.Item>
            </Menu>
            <Table  columns={columns} dataSource={dataRef} pagination={false} bordered={true} size={'small'}>

            </Table>
            <Button
                onClick={this.addRow}
               type="primary" style={{ marginBottom: 16 }}>
                + Добавить строку
            </Button>
        </div>
    )
}
}
export default TableCoord