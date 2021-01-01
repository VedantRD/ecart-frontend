import React from 'react';
import { Route } from 'react-router-dom';
import BuyerHome from '../components/user/home/BuyerHome';

const BuyerNavigation = () => {

    return (
        <>
            <Route exact path='/user/home' component={BuyerHome}></Route>
        </>
    )
}

export default BuyerNavigation
