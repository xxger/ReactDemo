import React, { Component } from 'react';

class Studyref4 extends Component {
    constructor(props){
        super(props)
        this.iptChange = this.iptChange.bind(this);
        this.addClick = this.addClick.bind(this)
        this.state = {
            iptVal:'',
            lists:['张三','李四']
        }
    }
    render() { 
        return (
            <div>
                <input 
                    value={this.state.iptVal}
                    onChange={this.iptChange}
                 />
                 <button onClick={this.addClick}>新增</button>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.lists.map((item,index)=>{
                            return(
                                <li key={item+index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    iptChange(e){
        this.setState({
            iptVal:e.target.value
        })
    }

    addClick(e){
        this.setState({
            lists:[...this.state.lists,this.state.iptVal]
        },()=>{
            //setState()是异步函数，使用ref时，需要在setState()完成时再运行
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
}
 
export default Studyref4;