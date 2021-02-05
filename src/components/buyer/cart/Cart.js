import React, { useEffect, useState, useContext } from 'react'
import AddressCard from '../../common/product/AddressCard'
import AmountCard from '../../common/product/AmountCard'
import EachItem from './EachItem'
import { UserContext } from '../../../App'
import axios from 'axios'
import { config } from '../../../config'

const Cart = () => {

    const [cartItems, setCartItems] = useState([])
    const { state } = useContext(UserContext)
    const [loading, setLoading] = useState(true)

    // get buyer cart
    useEffect(() => {
        let unmounted = false;
        axios.get(`${config.url}/buyer/${state._id}/cart`)
            .then(res => {
                if (!unmounted) {
                    console.log(res.data)
                    setLoading(false)
                    if (res.data.status == 'success') {
                        setCartItems(res.data.cart.items)
                    }
                }
            })
            .catch(err => {
                if (!unmounted) {
                    console.log(err)
                }
            })
        // cleanup function
        return () => { unmounted = true }
    }, []);

    return (
        <div>
            {/* <h3 className='text-secondary text-center'>Your cart is empty</h3> */}
            <div className='row justify-content-between'>
                <div className='col-8'>
                    <h4 className='mt-2 mb-3 text-center font-weight-bolder text-secondary'>
                        Cart Items ({cartItems.length})
                    </h4>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                {cartItems.map(item => {
                                    return (
                                        <div className='col-12 col-md-12' key={item._id}>
                                            <EachItem item={item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <AmountCard />
                        </div>
                        <div className='col-12'>
                            <AddressCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart