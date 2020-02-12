/*********** Routes for applications **************/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../containers/home';
import NotFound from '../components/NoFound';
import Registertion from '../containers/registertion';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/regi" component={Registertion} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>

    );
};

export default Routers;