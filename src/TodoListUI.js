import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'

class TodoListUI extends Component {

    render() { 
        return ( 
            <div>
                <Input 
                    style={{width:'300px'}}
                    value={this.props.iptVal}
                    onChange={this.props.changeIptVal}                
                />
                <Button 
                    type='primary'
                    onClick={this.props.clickBtn}
                >新增</Button>
                <List
                    bordered
                    dataSource = {this.props.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>
                        )
                    }
                ></List>
            </div>
         );
    }
}
 
export default TodoListUI;