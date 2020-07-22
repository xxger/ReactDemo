import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'文章标题-1'},
                {cid:456,title:'文章标题-2'},
                {cid:789,title:'文章标题-3'},
            ]
         }
    }
    render() { 
        return ( 
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <li key={item+index}><Link to={'/list/'+item.cid}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
         );
    }

}
 
export default Index;