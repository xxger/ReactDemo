import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props)=> {
        let {iptVal,iptChange,clickBtn,list} = props;
        return ( 
            <div>
                <input 
                    value={iptVal}
                    onChange={iptChange}
                />
                <button onClick={clickBtn}>提交</button>
                <ul>
                    {
                        list.map((item,index)=>{
                            return(
                                <li key={item+index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
         );
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