import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import { Divider } from 'rc-menu';

class Antddemo9 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:['张三','李四','小王']
         }
    }
  
    render() { 
        
        return ( 
            <div>
                <Input style={{width:'200px'}}/>
                <Button>增加</Button>
                    <List 
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(
                            <List.Item>{item}</List.Item>
                        )}
                    />
            </div>
         );
    }
}
 
export default Antddemo9;