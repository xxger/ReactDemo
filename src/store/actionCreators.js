import { CHANGE_IPT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes'
import axios from 'axios';
export const changeIptAction = (value) => ({
    type:CHANGE_IPT,
    value
})

export const addItemAction = ()=> ({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

//返回的函数
export const getTodoList = ()=>{
    return(dispatch)=>{
        axios.get('http://rap2.taobao.org:38080/app/mock/260730/demo')
        .then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}