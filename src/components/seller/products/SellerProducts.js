import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../App'
import { config } from '../../../config';
import Loading from '../../common/utils/Loading';
import RenderGrid from './RenderGrid';

const SellerProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { state } = useContext(UserContext)

    useEffect(() => {
        let unmounted = false;
        const userId = state._id
        axios.get(`${config.url}/seller/${userId}/products`)
            .then(res => {
                if (!unmounted) {
                    console.log(res.data)
                    setLoading(false)
                    if (res.data.length) {
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
    }, [state])

    return (
        !loading ?
            <>
                {/* <div className='row'> */}
                <div className='col-12 text-right pr-md-3 pt-md-3 pt-0'>
                    <Link to='/seller/addproduct'>
                        <button className='btn btn-primary'>
                            Add New Product
                        </button>
                    </Link>
                </div>
                <div className='col-12 px-0'>
                    <h5 className='text-muted text-center mt-4'>
                        Your Products
                    </h5>
                    <div className='px-5 mb-4'>
                        <hr className=''></hr>
                    </div>
                    <div className='row no-gutters'>
                        {products.map(product => {
                            return (
                                <div className='col-12 col-md-6 mb-3 mb-md-0 px-0 px-md-1' key={product._id}>
                                    <RenderGrid product={product} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* </div> */}
            </>
            :
            <Loading />
    )
}

export default SellerProducts
