import React from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from './workplace/ReactPage'
import Vue from './workplace/Vue'

function Workplace(){
    return(
        <div>
            <ul>
                <li><Link to='/workplace/reactpage/'>React笔记</Link></li>
                <li><Link to='/workplace/vue/'>Vue笔记</Link></li>
            </ul>
            <Route path='/workplace/reactpage/' component={ReactPage} />
            <Route path='/workplace/vue/' component={Vue} />
        </div>
        
    )
}

export default Workplace