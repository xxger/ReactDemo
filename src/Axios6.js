import React, { Component } from 'react';
import axios from 'axios'

class Axios6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        axios.get('http://rap2.taobao.org:38080/app/mock/260730/demo')
        .then((res)=>{
            this.setState({
                list:res.data.list
            })
            console.log(res.data.list);
        })
        .catch((error)=>{
            console.log('axios 获取数据失败'+error)
        })
    }
    render() {
        return (
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <li key={item+index}>{item}</li>
                        )
                    })
                }
            </ul>
        );
    }
}
 
export default Axios6;