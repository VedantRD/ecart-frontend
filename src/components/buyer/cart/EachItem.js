import React from 'react'

const EachItem = ({ item }) => {
    return (
        <div className='card my-2'>
            <div className='card-body p-0'>
                <div className='row no-gutters'>
                    <div className='col-3 col-md-4'>
                        <img src='https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png'
                            alt='img' className='img-fluid w-100' />
                    </div>
                    <div className='col-9 col-md-8 py-3 pl-2 pl-md-3 pr-3'>
                        <div className='row'>
                            <div className='col-10'>
                                <h5 className='mb-3'>{item.product.name}</h5>
                            </div>
                            <div className='col-2 text-right'>
                                <button className='btn btn-outline-danger px-2 py-1'>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </div>
                        </div>
                        <div className='row align-items-center mb-2'>
                            <div className='col-5 col-md-4'>
                                <h6 className='my-0'>₹{item.product.price}</h6>
                            </div>
                            <div className='col-7 col-md-7 col-lg-5'>
                                {/* item quantity */}
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-outline-danger rounded-0">
                                            <span>-</span>
                                        </button>
                                    </span>
                                    <input type='text' className="form-control text-center" value={item.quantity} />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-outline-success rounded-0">
                                            <span>+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h6 className='text-success'>1 offer available</h6>
                        <h6 className=''>Delivery by Fri, Jan 20</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachItem
