import React from 'react';
import { Route } from 'react-router-dom';
import Cart from '../components/buyer/cart/Cart';
import BuyerHome from '../components/buyer/home/BuyerHome';
import Products from '../components/buyer/products/Products';
import ProductDescription from '../components/buyer/products/ProductDescription';

const BuyerNavigation = () => {

    return (
        <>
            <Route exact path='/buyer' component={BuyerHome}></Route>
            <Route exact path='/buyer/products' component={Products}></Route>
            <Route exact path='/buyer/products/:id' component={ProductDescription}></Route>
            <Route exact path='/buyer/cart' component={Cart}></Route>
        </>
    )
}

export default BuyerNavigation
