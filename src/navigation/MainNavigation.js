import React, { useEffect, useContext } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import AuthNavigation from './AuthNavigation';
import SellerNavigation from './SellerNavigation';
import BuyerNavigation from './BuyerNavigation';
import { UserContext } from '../App';
import Navbar from '../components/common/Navbar';

const MainNavigation = () => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        dispatch({ type: 'USER', payload: null })
        localStorage.removeItem('USER')
        history.push('/buyer/login')
    }

    useEffect(() => {
        if (state == null) {
            const user = JSON.parse(localStorage.getItem('USER'))
            console.log(user)
            if (user) {
                dispatch({ type: 'USER', payload: user })
                if (user.type === 'buyer') {
                    history.push('/buyer')
                    console.log('you are buyer')
                }
                else if (user.type === 'seller') {
                    console.log('you are seller')
                    history.push('/seller')
                }
            }
            else {
                history.push('/buyer/login')
            }
        }
    }, [dispatch, state, history])

    return (
        <>
            <Navbar />
            <Switch>
                {state === null && <AuthNavigation />}
                {state && state.type === 'buyer' && <BuyerNavigation />}
                {state && state.type === 'seller' && <SellerNavigation />}
            </Switch>
        </>
    )
}

export default MainNavigation
