import React, { createContext, useReducer } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SellerHome from '../components/seller/home/SellerHome';
import { reducer, initialState } from '../reducers/sellerReducer'

export const SellerContext = createContext()

const SellerNavigation = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <SellerContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <Route exact path='/' component={SellerHome}></Route>
                </Switch>
            </Router>
        </SellerContext.Provider>
    )
}

export default SellerNavigation
