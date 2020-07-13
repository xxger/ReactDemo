import React, { Component,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import './Action7.css'


class Action7 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:false
         }
         this.onToggle = this.onToggle.bind(this);
    }
    render() { 
        return ( 
            <Fragment>
                <button onClick={this.onToggle}>点击这里</button>
                <ul>
                    <li>张三</li>
                    <li>李四</li>
                    <CSSTransition
                        in={this.state.isShow}  //用于判断是否出现的状态
                        timeout={1000} //动画持续时间
                        classNames="teacher-text"
                        unmountOnExit  //元素退成时自动把DOM也删除
                    >
                        <li>班主任-隔壁小王</li>
                    </CSSTransition>
                </ul>
            </Fragment>
         );
    }
    onToggle(){
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default Action7;