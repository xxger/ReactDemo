import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return ( 
            <div>
                <input 
                    value={this.props.iptVal}
                    onChange={this.props.iptChange}
                />
                <button onClick={this.props.clickBtn}>提交</button>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <li key={item+index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }
}
const stateToProps = (state)=>{
    return {
        iptVal :state.iptVal,
        list:state.list
    }
}
const dispatchToProps = (dispatch)=>{
    return {
        iptChange(e){
            let action = {
                type:'change_ipt',
                value:e.target.value
            }
            dispatch(action)
        },
        clickBtn(){
            let action={
                type:'add_btn'
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);