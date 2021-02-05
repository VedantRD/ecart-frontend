import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../../App'
import ProductCard from '../../common/product/ProductCard'
import axios from 'axios'
import Loading from '../../common/utils/Loading'
import Carousel from '../../common/utils/Carousel'
import { config } from '../../../config'

const BuyerHome = () => {

    const { state } = useContext(UserContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // get all products
    useEffect(() => {
        let unmounted = false;
        axios.get(`${config.url}/buyer/products`)
            .then(res => {
                if (!unmounted) {
                    console.log(res.data.products)
                    setLoading(false)
                    if (res.data.status === 'success') {
                        setProducts(res.data.products)
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
