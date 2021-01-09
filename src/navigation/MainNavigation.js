import React, { useEffect, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AuthNavigation from './AuthNavigation';
import SellerNavigation from './SellerNavigation';
import BuyerNavigation from './BuyerNavigation';
import { UserContext } from '../App';
import Navbar from '../components/common/Navbar';
import { Wrapper } from '../styles/layout/layout';
import Contact from '../components/common/Contact';
import About from '../components/common/About';
import NotFound from '../components/common/utils/NotFound';

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
                    history.push('/buyer')
                    console.log('you are buyer')
                }
                else if (user.type === 'seller') {
                    console.log('you are seller')
                    history.push('/seller')
                }
            }
            else {
                history.push('/buyer')
            }
        }
    }, [dispatch, state, history])

    return (
        <div>
            <Navbar />
            <Wrapper>
                <Switch>
                    {/* common routes */}
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />

                    {/* auth routes */}
                    {state === null && <AuthNavigation />}

                    {/* buyer routes */}
                    {state && state.type === 'buyer' && <BuyerNavigation />}

                    {/* seller routes */}
                    {state && state.type === 'seller' && <SellerNavigation />}

                    {/* handle not found page */}
                    <Route component={NotFound}></Route>
                </Switch>
            </Wrapper>
        </div>
    )
}

export default MainNavigation
