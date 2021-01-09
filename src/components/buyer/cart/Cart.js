import React from 'react'
import AddressCard from '../../common/product/AddressCard'
import AmountCard from '../../common/product/AmountCard'
import EachItem from './EachItem'

const Cart = () => {
    return (
        <div>
            {/* <h3 className='text-secondary text-center'>Your cart is empty</h3> */}
            <div className='row justify-content-between'>
                <div className='col-8'>
                    <h4 className='mt-2 mb-3 text-center font-weight-bolder text-secondary'>
                        Cart Items (3)
                    </h4>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-12 col-md-12'>
                                    <EachItem />
                                </div>
                                <div className='col-12 col-md-12'>
                                    <EachItem />
                                </div>
                                <div className='col-12 col-md-12'>
                                    <EachItem />
                                </div>
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