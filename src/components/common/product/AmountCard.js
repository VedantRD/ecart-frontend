import React from 'react'

const AmountCard = () => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='row no-gutters mb-3'>
                    <h5 className='d-inline'>Order Summary</h5>
                </div>
                <div className='row no-gutters mb-1'>
                    <span className=''>Subtotal</span>
                    <span className='ml-auto'>₹49000</span>
                </div>
                <div className='row no-gutters mb-1'>
                    <span className=''>Taxes (Including GST)</span>
                    <span className='ml-auto'>₹50</span>
                </div>
                <div className='row no-gutters mb-1'>
                    <span className=''>Delivery Charges</span>
                    <b className='ml-auto'>FREE</b>
                </div>
                <div className='row no-gutters mb-1'>
                    <span className=''>Discount</span>
                    <b className='ml-auto text-success'>- 0</b>
                </div>
                <hr></hr>
                <div className='row no-gutters mb-4'>
                    <b className=''>Total Amount</b>
                    <b className='ml-auto'>₹ 49050</b>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <button className='btn btn-success w-100'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmountCard
