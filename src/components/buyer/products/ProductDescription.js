import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ProductDescription = () => {

    const location = useLocation()
    const [product, setProduct] = useState(location.product)

    return (
        <div className='row px-md-5'>
            <div className='col-4 d-flex justify-content-center'>
                <img src={product.image} className='img-fluid'></img>
            </div>
            <div className='col-8'>
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>Available quantity - {product.quantity}</p>
                {product.quantity < 5 && <p className='text-danger'>Hurry only {product.quantity} left</p>}
            </div>

        </div>
    )
}

export default ProductDescription
