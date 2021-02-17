import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../App'
import axios from 'axios'
import { config } from '../../../config'

const ProductCard = ({ product }) => {

    const title = product.name.length < 26 ? product.name : product.name.slice(0, 26) + '...'
    const { state } = useContext(UserContext)
    const [loading, setLoading] = useState(true)

    const addToCart = () => {
        let unmounted = false;
        axios.get(`${config.url}/buyer/${state._id}/cart`)
            .then(res => {
                if (!unmounted) {
                    console.log(res.data)
                    setLoading(false)
                    if (res.data.status === 'success') {
                        const cartItems = [...res.data.cart.items, { product: product._id }]
                        const cartId = res.data.cart._id
                        axios.post(`${config.url}/buyer/cart/update`, { _id: cartId, items: cartItems })
                            .then(newRes => {
                                console.log(newRes)
                            })
                            .catch(err => { console.log(err) })
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
    }

    return (
        // <Link to='/buyer/products/id' className='text-dark' style={{ textDecoration: 'none' }}>
        <div className="card no-border-sm" style={{ height: 380 }}>
            <img
                className="card-img-top img-fluid"
                src={product.image} alt="phone img"
                style={{ height: 250 }}
            />
            <div className="card-body pt-0 px-3" style={{ height: 250 }}>
                <h5 className="card-title mt-2" style={{ height: 25 }}>{title}</h5>
                <div className='row align-items-center mt-2'>
                    <div className='col'>
                        <span className='h6 font-weight-bold'>₹ {product.price}</span>
                    </div>
                    <div className='col text-right'>
                        <span className='badge-success py-1 px-2'>
                            4.7 <i className='fa fa-star'></i>
                        </span>
                    </div>
                </div>
                <div className='row no-gutters mt-3'>
                    <div className='col pr-2'>
                        <Link to={{ pathname: `/buyer/products/${product._id}`, product }}>
                            <button className='btn btn-primary w-100 py-1'>
                                Buy Now
                            </button>
                        </Link>
                    </div>
                    <div className='col pl-2'>
                        {/* <Link to='/buyer/cart'> */}
                        <button className='btn btn-primary w-100 py-1' onClick={addToCart}>
                            Add to cart {/* <i className='fa fa-shopping-cart'></i> */}
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
        // </Link>
    )
}

export default ProductCard
