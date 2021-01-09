import React from 'react'

const EachItem = () => {

    const qty = 1

    return (
        <div className='row my-2 no-gutters'>
            <div className='col-3 col-md-4'>
                <img src='https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png'
                    alt='img' className='img-fluid h-100 w-100' />
            </div>
            <div className='col-7 col-md-5 pb-1 pl-2 pl-md-3 pr-1 pr-md-2'>
                <h5 className='font-weight-bold mb-3'>Samsung Galaxy Smart Tv 34 inch</h5>
                <div className='row align-items-center mb-2'>
                    <div className='col-3'>
                        <h5 className='my-0'>₹49000</h5>
                    </div>
                    <div className='col-5'>
                        {/* item quantity */}
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-info rounded-0">
                                    <span>-</span>
                                </button>
                            </span>
                            <input type='text' className="form-control text-center" value={qty} />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-info rounded-0">
                                    <span>+</span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <h6 className='text-success'>1 offer available</h6>
                <h6 className=''>Delivery by Fri, Jan 20</h6>
            </div>
            <div className='col-2 col-md-1'>
                <button className='btn btn-outline-danger'>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </div>
    )
}

export default EachItem
