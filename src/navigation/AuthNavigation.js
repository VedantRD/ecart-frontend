import React from 'react'
import { Route } from 'react-router-dom';
import SellerLogin from '../auth/seller/SellerLogin';
import SellerSignup from '../auth/seller/SellerSignup';
import BuyerLogin from '../auth/user/BuyerLogin';
import BuyerSignup from '../auth/user/BuyerSignup';

const AuthNavigation = () => {
    return (
        <>
            <Route exact path='/' component={BuyerLogin}></Route>
            <Route exact path='/user/signup' component={BuyerSignup}></Route>
            <Route exact path='/seller/signup' component={SellerSignup}></Route>
            <Route exact path='/seller/login' component={SellerLogin}></Route>
        </>
    )
}

export default AuthNavigation
