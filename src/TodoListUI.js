import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'

const TodoListUI = (props) => {
    return(
        <div>
                <Input 
                    style={{width:'300px'}}
                    value={props.iptVal}
                    onChange={props.changeIptVal}                
                />
                <Button 
                    type='primary'
                    onClick={props.clickBtn}
                >新增</Button>
                <List
                    bordered
                    dataSource = {props.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>
                        )
                    }
                ></List>
            </div>
    )
}
 
export default TodoListUI;