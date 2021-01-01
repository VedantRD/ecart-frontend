import React from 'react'
import { Route } from 'react-router-dom';
import SellerLogin from '../auth/seller/SellerLogin';
import SellerSignup from '../auth/seller/SellerSignup';
import BuyerLogin from '../auth/buyer/BuyerLogin';
import BuyerSignup from '../auth/buyer/BuyerSignup';
import BuyerHome from '../components/buyer/home/BuyerHome';

const AuthNavigation = () => {
    return (
        <>
            <Route exact path='/buyer/login' component={BuyerLogin}></Route>
            <Route exact path='/buyer/signup' component={BuyerSignup}></Route>
            <Route exact path='/seller/login' component={SellerLogin}></Route>
            <Route exact path='/seller/signup' component={SellerSignup}></Route>
            <Route exact path='/buyer' component={BuyerHome}></Route>
        </>
    )
}

export default AuthNavigation
