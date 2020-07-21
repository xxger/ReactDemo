import { CHANGE_IPT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes'
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