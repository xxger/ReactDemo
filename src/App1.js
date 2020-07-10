import React,{Component,Fragment} from 'react'
// Fragment只是有占位功能，不会显示在html结构中
class App1 extends Component{
    //若顶部未引入{Component},则需要写 React.Component
    render(){
        return(
            <Fragment>
                <input />
                <button>新增</button>
                <ul className="my-list">
                    <li>{true?'王二':'张三'}</li>
                    <li>李四</li>
                </ul>
            </Fragment>
        )
    }
}

export default App1