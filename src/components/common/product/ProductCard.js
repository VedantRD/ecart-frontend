import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const title = product.title.length < 26 ? product.title : product.title.slice(0, 26) + '...'

    return (
        // <Link to='/buyer/products/id' className='text-dark' style={{ textDecoration: 'none' }}>
        <div className="card no-border-sm" style={{ height: 380 }}>
            <img
                className="card-img-top img-fluid px-3 pt-2"
                src={product.image} alt="phone img"
                style={{ height: 250 }}
            />
            <div className="card-body pt-0 px-3" style={{ height: 250 }}>
                <h5 className="card-title mt-2" style={{ height: 25 }}>{title}</h5>
                <div className='row align-items-center mt-2'>
                    <div className='col'>
                        <span className='badge-success py-1 px-2'>
                            4.7 <i className='fa fa-star'></i>
                        </span>
                    </div>
                    <div className='col'>
                        <span className='h5 mr-2 font-weight-normal'>MRP</span>
                        <span className='h5 text-success font-weight-bold'>₹8,999</span>
                    </div>
                </div>
                <div className='row no-gutters mt-3'>
                    <div className='col pr-2'>
                        <Link to='/buyer/products/id'>
                            <button className='btn btn-primary w-100 py-1'>
                                Buy Now
                            </button>
                        </Link>
                    </div>
                    <div className='col pl-2'>
                        <Link to='/buyer/cart'>
                            <button className='btn btn-primary w-100 py-1'>
                                Add to cart <i className='fa fa-shopping-cart'></i>
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
