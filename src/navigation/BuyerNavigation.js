import React from 'react';
import { Route } from 'react-router-dom';
import Cart from '../components/buyer/cart/Cart';
import BuyerHome from '../components/buyer/home/BuyerHome';
import ProductDescription from '../components/common/products/ProductDescription';

const BuyerNavigation = () => {

    return (
        <>
            <Route exact path='/buyer' component={BuyerHome}></Route>
            <Route exact path='/buyer/products/id' component={ProductDescription}></Route>
            <Route exact path='/buyer/cart' component={Cart}></Route>
        </>
    )
}

export default BuyerNavigation
