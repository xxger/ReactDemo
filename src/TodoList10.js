import React, { Component } from 'react';
// import 'antd/dist/antd.css'
// import {Input,Button,List} from 'antd'
import store from './store'
// import { CHANGE_IPT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import { changeIptAction, addItemAction , deleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList10 extends Component {
    constructor(props) {
        super(props);
        this.state=store.getState();
        this.changeIptVal = this.changeIptVal.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        
        this.storeChange = this.storeChange.bind(this)
        this.storeClick = this.storeClick.bind(this)
        
        store.subscribe(this.storeChange)  //订阅Redux状态，新版不用写这一句
    }
    render() { 
        return (
            <TodoListUI
                iptVal = {this.state.iptVal}
                list={this.state.list}
                changeIptVal={this.changeIptVal}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
    storeChange(){
        this.setState(store.getState())
    }
    storeClick(){
        this.setState(store.getState())
    }
    changeIptVal(e){
        const action = changeIptAction(e.target.value)
        // const action = {
        //     type:CHANGE_IPT,
        //     value:e.target.value
        // }
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        // const action={
        //     type:ADD_ITEM
        // }
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        // const action={
        //     type:DELETE_ITEM,
        //     index
        // }
        store.dispatch(action)
    }
}
 
export default TodoList10;