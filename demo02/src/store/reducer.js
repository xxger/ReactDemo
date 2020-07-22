const defaultState = {
    iptVal:'write something',
    list:['小明','小李']
}

export default(state = defaultState,action) =>{
    if(action.type === 'change_ipt'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.iptVal = action.value
        return newState
    }
    if(action.type === 'add_btn'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.iptVal)
        newState.iptVal = ''
        return newState
    }
    return state
}