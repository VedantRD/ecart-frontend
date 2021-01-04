import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const title = product.title.length < 30 ? product.title : product.title.slice(0, 45) + '...'

    return (
        // <Link to='/buyer/products/id' className='text-dark' style={{ textDecoration: 'none' }}>
        <div className="card no-border-sm" style={{ height: 400 }}>
            <img
                className="card-img-top img-fluid px-4 pt-2"
                src={product.image} alt="phone img"
                style={{ height: 250 }}
            />
            <div className="card-body pt-0" style={{ height: 250 }}>
                <h5 className="card-title my-2" style={{ height: 50 }}>{title}</h5>
                <div className='row align-items-center mb-2'>
                    <div className='col'>
                        <span className='h5 text-success font-weight-bold'>₹8,999</span>
                    </div>
                    <div className='col'>
                        <span className='badge-success py-1 px-2'>
                            4.7 <i className='fa fa-star'></i>
                        </span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to='/buyer/products/id'>
                            <button className='btn btn-primary w-100'>
                                Buy Now
                                </button>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to='/buyer/cart'>
                            <button className='btn btn-primary w-100'>
                                Add to cart
                                </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        // </Link>
    )
}

export default ProductCard
