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
                  shirota: 555,
                  dolgota: 32,
                  tools: ''
                  },
                  {
                    key: '2',
                    num: 2,
                    shirota: 666,
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
      this.state={
        current: 'gg',
        colomnRef: this.columns1,
        dataRef: this.state1.data,        
      };
     console.log(this.state.colomnRef);
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
        
      // this.state.current= e.key;
        this.setState({
          current: e.key});
          // () => { this.setState ({current: e.key,})});
        
        console.log(this.state.current);

        if(this.state.current=='gg'){

          this.setState((columns1,state)=>({
            columns1,
            colomnRef: columns1,
          }));
          
          this.setState((state1)=>({
            state1,
            dataRef: state1.data,
          }));
            // this.state.colomnRef=this.columns1;
            // this.state.dataRef=this.state1.data;
            console.log(this.state.colomnRef)
        }
        else if(this.state.current=='mm'){

          this.setState((columns2)=>({
            columns2,
            colomnRef: this.columns2
          }));
          
          this.setState((state2)=>({
            state2,
            dataRef: state2.data
          }));




          // this.setState({
          //   colomnRef: this.columns1,
          // });
          // console.log(this.colomnRef)
          // this.setState({
          //   dataRef: this.state1.data,
          // });
          // this.state.colomnRef=this.columns2;
          // this.state.dataRef=this.state2.data;
          console.log(this.state.colomnRef)
        }
      
        

        // this.current = e.key;

        // console.log( this.current);
        // console.log( this.current=='gg')
      };


    render(){
        
        let columnsR = this.state.colomnRef;
        let dataR = this.state.dataRef;
        // if(this.current=='gg'){
        //   // this.setState({
        //   //   colomnRef: this.columns1,
        //   // });
        //   // this.setState({
        //   //   dataRef: this.state1.data,
        //   // });
        //     colomnRef=this.columns1;
        //     dataRef=this.state1.data;
        //     // console.log(colomnRef)
        // }
        // else if(this.current=='mm'){
        //     colomnRef=this.columns2;
        //     dataRef=this.state2.data;
        // }
        // else if(this.current=='az'){
        //     colomnRef=this.columns1;
        //     dataRef=this.state1.data;
        // }
        // else if(this.current=='rum'){
        //     colomnRef=this.columns2;
        //     dataRef=this.state2.data;
        // }
 

        const columns = columnsR.map(col => {
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
            <Menu onClick={this.handleClick} selectedKeys={[this.current]} mode='horizontal'>
                <Menu.Item key='gg'>ГГ, ГГГГГ</Menu.Item>
                <Menu.Item key='mm'>ГГ ММ СС.с</Menu.Item>
                <Menu.Item key='az'>Азимуты</Menu.Item>
                <Menu.Item key='rum'>Румбы</Menu.Item>
            </Menu>
            <Table  columns={columns} dataSource={dataR} pagination={false} bordered={true} size={'small'}>

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