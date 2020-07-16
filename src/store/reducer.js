const defaultState = {
    iptVal:'write something',
    list:['张三','李四','小王']
} //默认数据
export default (state = defaultState,action)=>{
    if(action.type === 'changeIpt'){
        let newState = JSON.parse(JSON.stringify(state))  //深度拷贝state
        newState.iptVal = action.value
        return newState
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.iptVal)
        newState.iptVal = ''
        return newState
    }
    return state
}