import React from 'react';
import { Route } from 'react-router-dom';
import SellerHome from '../components/seller/home/SellerHome';

const SellerNavigation = () => {
    return (
        <>
            <Route exact path='/seller' component={SellerHome}></Route>
        </>
    )
}

export default SellerNavigation
