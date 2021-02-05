import React from 'react'
import { Link } from 'react-router-dom'

const EachProduct = ({ product }) => {
    return (
        <div className='row mb-4'>
            <div className='col-4'>
                {/* <img src='https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png'
                    alt='img' className='img-fluid h-100 w-100' /> */}
                <img src={product.image}
                    alt='img' className='img-fluid h-100 w-100' />
            </div>
            <div className='col-8 px-1'>
                <h5 className='font-weight-bold mb-2'>{product.name}</h5>
                <h6>₹{product.price}</h6>
                <h6>Remaining Quantity - {product.quantity}</h6>
                <Link to={{ pathname: `/seller/editproduct/${product._id}`, product }}>
                    <button className='btn btn-outline-primary'>Edit Product</button>
                </Link>
            </div>
        </div>
    )
}

export default EachProduct
