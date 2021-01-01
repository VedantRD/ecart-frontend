import React from 'react';
import { Route } from 'react-router-dom';
import BuyerHome from '../components/buyer/home/BuyerHome';

const BuyerNavigation = () => {

    return (
        <>
            <Route exact path='/buyer' component={BuyerHome}></Route>
        </>
    )
}

export default BuyerNavigation
