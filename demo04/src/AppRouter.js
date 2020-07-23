import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Workplace from './Pages/Workplace'


function AppRouter(){
    let routeConfig=[
        {path:'/',title:'首页',exact:true,component:Index},
        {path:'/Workplace/',title:'前端',exact:false,component:Workplace}
    ]
    return(
        <Router>
            <dl className="left">
                <dt>一级导航</dt>
                {
                    routeConfig.map((item,index)=>{
                        return(
                            <dd key={item+index}><Link to={item.path}>{item.title}</Link></dd>
                        )
                    })
                }
            </dl>
            <div className="right">
            {
                    routeConfig.map((item,index)=>{
                        return(
                            <Route key={item+index} path={item.path} exact={item.exact} component={item.component} />
                        )
                    })
                }
            </div>
        </Router>
    )
}

export default AppRouter;