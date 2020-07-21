import { CHANGE_IPT , ADD_ITEM , DELETE_ITEM } from './actionTypes'
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