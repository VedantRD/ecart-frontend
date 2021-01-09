import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../../App'
import ProductCard from '../../common/product/ProductCard'
import axios from 'axios'
import Loading from '../../common/utils/Loading'
import Carousel from '../../common/utils/Carousel'

const BuyerHome = () => {

    const { state } = useContext(UserContext)
    // const phones = ['Samsung Galaxy S21', 'Nokia 9.1', 'iPhone 11 Pro', 'Motorola One Power', 'Realme X3', 'Redmi Note 15 Pro', 'POCO M4']
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // get all products
    useEffect(() => {
        let unmounted = false;
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                if (!unmounted) {
                    console.log(res.data)
                    setLoading(false)
                    if (res.data.length) {
                        setProducts(res.data)
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
        !loading ?
            <div className='row no-gutters h-100 align-items-center justify-content-center px-lg-5'>
                <div className='col'>
                    <div className='row no-gutters mb-3'>
                        <div className='col'>
                            <Carousel />
                        </div>
                    </div>
                    <div className='row'>
                        {products.map((product, ind) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-3 mb-3' key={ind}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            :
            <Loading />
    )
}

export default BuyerHome
