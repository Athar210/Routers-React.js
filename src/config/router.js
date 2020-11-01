import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../containers/Home'
import Contact from '../containers/Contact'



class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/Contact' component={Contact} />
                
            </Router>
        )
    }
}

export default AppRouter;