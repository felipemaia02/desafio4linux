import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import isAuthenticated from './auth';

import Profile from './pages/profile';
import Login from './pages/login';

function PrivateRoute({ component: Component, ...rest }) {
    return(
        <Route {...rest} render={props => (
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state:{from:props.location} }} />
            )
        )} />
    )
};


export default function Routes(){
    const [token, setToken] = useState();

    return(
    <BrowserRouter>
        <Switch>
            
            <Route exact path = "/login" component = {Login}/>
            <PrivateRoute exact path = "/" component = {Profile}/>

        </Switch>
    </BrowserRouter>
    );
}