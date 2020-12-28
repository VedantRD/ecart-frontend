import React, { createContext, useReducer } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from '../components/user/home/Homepage';
import { reducer, initialState } from '../reducers/userReducer'

export const UserContext = createContext()

const UserNavigation = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Homepage}></Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}

export default UserNavigation
