import React, { Component,Fragment } from 'react';
import {CSSTransition , TransitionGroup} from 'react-transition-group'
import './Action7.css'

class Actiongroup8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:['张三','李四','小王']
        }
    }
    render() { 
        return (
            <Fragment>
                <button onClick={this.onToggle}>点击这里</button>
                <ul>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index) =>{
                            return(
                                <CSSTransition
                                    key={item+index}
                                    timeout={1000}
                                    appear={true}
                                    classNames='teacher-text'
                                    unmountOnExit
                                >
                                    <li>{item}</li>
                                </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
            </Fragment>
        );
    }
}
 
export default Actiongroup8;