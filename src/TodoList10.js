import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'

class TodoList10 extends Component {
    constructor(props) {
        super(props);
        this.state=store.getState();
        this.changeIptVal = this.changeIptVal.bind(this)
        this.clickBtn = this.clickBtn.bind(this)

        this.storeChange = this.storeChange.bind(this)
        this.storeClick = this.storeClick.bind(this)
        
        store.subscribe(this.storeChange)  //订阅Redux状态，新版不用写这一句
    }
    render() { 
        return (
            <div>
                <Input 
                    style={{width:'300px'}}
                    onChange={this.changeIptVal}                
                />
                <Button 
                    type='primary'
                    onClick={this.clickBtn}
                >新增</Button>
                <List
                    bordered
                    dataSource = {this.state.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item>{item}</List.Item>
                        )
                    }
                ></List>
            </div>
        );
    }
    storeChange(){
        this.setState(store.getState())
    }
    storeClick(){
        this.setState(store.getState())
    }
    changeIptVal(e){
        const action = {
            type:'changeIpt',
            value:e.target.value
        }
        store.dispatch(action)
    }
    clickBtn(){
        const action={
            type:'addItem'
        }
        store.dispatch(action)
    }
}
 
export default TodoList10;