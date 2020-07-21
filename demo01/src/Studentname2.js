import React,{Component,Fragment} from 'react'
import StudentsItem3 from './StudentsItem3'

class Studentname2 extends Component{
    //数据定义在构造函数里
    constructor(props){
        super(props)  //调用父类的构造函数，固定写法
        this.state={
            iptVal:'',
            lists:['张三','李四']
        }
    }
    render(){
        return(
            <Fragment>
                {/* jsx语句中的正确注释方法 */}
                {
                    //单行注释需要换行，否则报错
                }
                <label htmlFor='ipt'>点击输入</label>
                <input id='ipt' value={this.state.iptVal} onChange={this.iptChange.bind(this)}/>
                <button onClick={this.btnClick.bind(this)}>新增</button>
                <ul className="my-list">
                   {
                       this.state.lists.map((item,index)=>{
                            return (
                                <Fragment key={item+index} >
                                    {/* 
                                        <li key={item+index}
                                        onClick={this.deleteItem.bind(this,index)}
                                        dangerouslySetInnerHTML={{__html:item}}>
                                    </li>
                                    
                                    */}
                                    <StudentsItem3
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </Fragment>
                            )
                        })
                   }
                </ul>
            </Fragment>
        )
    }
    iptChange(e){
        this.setState({
            iptVal:e.target.value
        })
    }
    btnClick(e){
        this.setState({
            //... 叫做扩展运算符
            lists:[...this.state.lists,this.state.iptVal]
        })
    }
    deleteItem(index){
        //react禁止直接操作state,需要新建变量，将数据存在变量中，操作变量
        let lists = this.state.lists
        lists.splice(index,1)
        this.setState({
            lists:lists
        })
    }
}

export default Studentname2