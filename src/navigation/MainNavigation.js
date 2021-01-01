import React, { useEffect, useContext } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import AuthNavigation from './AuthNavigation';
import SellerNavigation from './SellerNavigation';
import BuyerNavigation from './BuyerNavigation';
import { UserContext } from '../App';

const MainNavigation = () => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        if (state == null) {
            const user = JSON.parse(localStorage.getItem('USER'))
            console.log(user)
            if (user) {
                dispatch({ type: 'USER', payload: user })
                if (user.type === 'buyer') {
                    history.push('/user/home')
                    console.log('you are buyer')
                }
                else if (user.type === 'seller') {
                    console.log('you are seller')
                    history.push('/seller')
                }
            }
        }
    }, [dispatch, state, history])

    return (
        <Switch>
            {state === null && <AuthNavigation />}
            {state && state.type === 'buyer' && <BuyerNavigation />}
            {state && state.type === 'seller' && <SellerNavigation />}
        </Switch>
    )
}

export default MainNavigation
