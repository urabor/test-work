import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Icon, Button, Table, Select, Popconfirm } from 'antd';
import { object } from 'prop-types';

const { Option } = Select;

class TableCoord extends React.Component{
  
  // constructor(props){
  //       super(props);
        
        columns1 = [            
          {   title:'##',
              dataIndex: 'num',    },
          {  title: 'Широта',
            dataIndex: 'shirota',  },
          {  title: 'Долгота',
              dataIndex: 'dolgota', },
          {  title: 'Инструменты',
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
        columns2 = [
          
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
    
        state1 =
        {
            data:
            [
                {
                key: 0,
                num: 1,
                shirota: 33.5,
                dolgota: 32,
                flex: '',
                tools: ''
                },
                {
                  key: 1,
                  num: 2,
                  shirota: 33.5,
                  dolgota: 32,
                  flex: '',
                  tools: ''
                  },
            ],
            count:2,
           
    };
    state2 =
        {
            data:
            [
                {
                key: 0,
                num: 1,
                shirota: 555,
                dolgota: 32,
                tools: ''
                },
                {
                  key: 1,
                  num: 2,
                  shirota: 666,
                  dolgota: 32,
                  tools: ''
                  },
            ],
            count:2,
    }  
      // current: 'gg',
      // colomnRef: this.state.columns1,
      // dataRef: this.state.state1.data,  
      // newData: {
      //   key: 0,
      //   num: 0,
      //   shirota: 33.5,
      //   dolgota: 32,
      //   flex: '',
      //   tools: ''
      // }, 

      
      state ={
        current: 'gg',
        colomnRef:  this.columns1,
        dataRef : this.state1.data,
        newData: {
          key: 0,
          num: 0,
          shirota: 33.5,
          dolgota: 32,
          flex: '',
          tools: ''
        },  
      
     };
    
      deleteRow = key =>{
        let dataSource = [...this.state1.data];
        dataSource = dataSource.filter(item => item.key !== key);
        console.log( dataSource)
        this.setState({ data: dataSource});
        
    };
    addRow =() => { 
      
        if(this.state.current=='gg'){
        debugger;
          let newState = this.state1;

          let newData = [];
          newData.key= this.state1.count;
          newData.num= this.state1.count+1;
          newData.shirota= this.state.newData.shirota;
          newData.dolgota= this.state.newData.dolgota;
          newData.flex= this.state.newData.flex;
          newData.tools= this.state.newData.tools;
          
          newData= Object.assign({},newData);

          newState.count+=1;
          console.log(newState)
          newState.data.push(newData);

         this.setState({
          state1 : newState
         })
          //console.log(newState)

          // const newData = Object.assign({},this.state1.newData);
          // console.log(newData)
          // this.setState({  data: [...data, newData],
          //   count: count+1}
          // );
           
          
            // ()=>{console.log(this.state1)}
        
          
          // console.log(this.state1.data);
          // console.log(this.state1.newData)
        }
        // else if(this.state.current=='mm'){
          
        // }

        // const {count, data}= newState;
        
        // const newData = Object.assign({},this[`state${i}`].newData);
        // const newData = Object.assign({},newState.newData);

            // this.setState({ data: [...data, newState.newData],
            // count: newState.count+1, 
            // });
        // console.log(newState);
    };


    handleClick = e => {
      // debugger;
      this.state.current= e.key;
      // console.log(this.state.current)

        if(this.state.current=='gg'){
          
          // this.setState({colomnRef: this.state.columns1,
          //   dataRef: this.state.state1.data,
          // })
          this.setState({
            colomnRef: this.columns1
          });
          this.setState({
             dataRef: this.state1.data
          });
        }

        else if(this.state.current=='mm'){
          this.setState({
            colomnRef: this.columns2
          });
          this.setState({
             dataRef: this.state2.data
          });
         
        }

        else if(this.state.current=='az'){
          this.setState({colomnRef: this.state.columns1,
            dataRef: this.state.state1.data,
          })
        }

        else if(this.state.current=='rum'){
          this.setState({colomnRef: this.state.columns1,
            dataRef: this.state.state1.data,
          })
          // this.setState({
          //   colomnRef: this.columns2
          // });
          // this.setState({
          //    dataRef: this.state2.data
          // });
        }

      };


    render(){
        
        let columnsR = this.state.colomnRef;
        let dataR = this.state.dataRef;
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