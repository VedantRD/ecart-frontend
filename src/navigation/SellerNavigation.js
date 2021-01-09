import React from 'react';
import { Route } from 'react-router-dom';
import SellerHome from '../components/seller/home/SellerHome';
import AddProduct from '../components/seller/products/AddProduct';
import EditProduct from '../components/seller/products/EditProduct';
import SellerProducts from '../components/seller/products/SellerProducts';

const SellerNavigation = () => {
    return (
        <>
            <Route exact path='/seller' component={SellerHome}></Route>
            <Route exact path='/seller/products' component={SellerProducts}></Route>
            <Route exact path='/seller/addproduct' component={AddProduct}></Route>
            <Route exact path='/seller/editproduct/:id' component={EditProduct}></Route>
        </>
    )
}

export default SellerNavigation
