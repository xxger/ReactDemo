import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Workplace from './Pages/Workplace'


function AppRouter(){
    return(
        <Router>
            <dl className="left">
                <dt>一级导航</dt>
                <dd><Link to='/'>首页</Link></dd>
                <dd><Link to='/Workplace'>前端</Link></dd>
            </dl>
            <div className="right">
                <Route path='/' exact component={Index} />
                <Route path='/Workplace/' component={Workplace} />
            </div>
        </Router>
    )
}

export default AppRouter;