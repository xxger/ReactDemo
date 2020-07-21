import { CHANGE_IPT , ADD_ITEM , DELETE_ITEM , GET_LIST } from './actionTypes'

const defaultState = {
    iptVal:'write something',
    list:['张三','李四','小王']
} //默认数据
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_IPT){
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state
        newState.iptVal = action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.iptVal)
        newState.iptVal = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.list;
        return newState
    }
    return state
}