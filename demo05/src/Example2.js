import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log('首页欢迎你')
        return ()=>{
            console.log('老弟你走了')
        }
    },[])
    return <h2>首页</h2>
}

function List(){
    useEffect(()=>{
        console.log('列表欢迎你')
    })
    return <h2>列表页</h2>
}

function Example2(){
    const [ count , setCount ] = useState(0);
    useEffect(()=>{
        console.log(`已点击 ${count} 次`)
        return ()=>{
            console.log('====================')
        }
    },[count])  //count参数变化时，调用componentWillUnmount
    return(
        <div>
            <p>已点击{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表页</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>
        </div>
    )
}
 
export default Example2;