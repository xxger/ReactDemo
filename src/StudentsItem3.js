import React, { Component } from 'react';
//引入PropTypes，方便校验传递值
import PropTypes from 'prop-types'  

class StudentsItem3 extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)  //此写法节约性能
    }
    render() { 
        return (
            <li onClick={this.handleClick}>{this.props.firstName}+{this.props.content}</li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

// 传递值校验代码
StudentsItem3.propTypes={
    //isRequired必传值校验
    content:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
//使用默认值
StudentsItem3.defaultProps={
    firstName:'小明'
}
 
export default StudentsItem3;