import React, { Component } from 'react';
class Cycle5 extends Component {
    constructor(props) {
        console.log('constructor--在组件创建的时候调用')
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        console.log('componentWillMount--组件即将被挂载到页面的时候执行，只执行一次')
    }
    componentDidMount(){
        console.log('componentDidMount--组件挂载完成时执行，只执行一次')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate--组件发生改变前执行，必须有布尔返回值,当返回值为true时才会更新组件,此函数有两个参数')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate--在组件更新前，但在shouldComponentUpdate之后执行')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate在组件更新后执行，是组件更新的最后一个环节')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps--子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期函数就会被执行(也就是说组件第一次存在于DOM中不会被执行；如果已经存在于DOM中才会被执行)')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount--组件从页面中删除的时候执行')
    }
    render() { 
        console.log('render--组件挂载中')
        return (
            <div>生命周期函数</div>
        );
    }
}
 
export default Cycle5;