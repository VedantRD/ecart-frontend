import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserLogin from '../auth/user/UserLogin';
import UserSignup from '../auth/user/UserSignup';

const AuthNavigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={UserLogin}></Route>
                <Route exact path='/user/signup' component={UserSignup}></Route>
            </Switch>
        </Router>
    )
}

export default AuthNavigation
