import React, { useContext, useState, useEffect } from 'react'
import CategoryCard from '../../common/product/CategoryCard'
import { UserContext } from '../../../App'
import ProductCard from '../../common/product/ProductCard'
import axios from 'axios'
import Loading from '../../common/utils/Loading'
import { config } from '../../../config'


const Products = () => {

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
            <div>
                <div className='row no-gutters justify-content-end align-items-center mb-4 mt-2'>
                    <div className='col'>
                        <h5>Showing {products.length} results</h5>
                    </div>
                    <div className='col-2 pl-3'>
                        <div className="dropdown w-100">
                            <button className="btn btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className='mr-1'>Sort Products By</span>
                            </button>
                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item">Price low to high</button>
                                <button className="dropdown-item">price high to low</button>
                                <button className="dropdown-item">date latest first</button>
                                <button className="dropdown-item">date oldest first</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 pl-3'>
                        <div className="dropdown w-100">
                            <button className="btn btn-info dropdown-toggle w-100 d-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className='mr-1'>Select Category</span>
                            </button>
                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item">Price low to high</button>
                                <button className="dropdown-item">price high to low</button>
                                <button className="dropdown-item">date latest first</button>
                                <button className="dropdown-item">date oldest first</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    {/* Products Category */}
                    {/* <div className='col-6 gutter_col mb-3'>
                        <CategoryCard />
                    </div> */}
                    {/* All Products */}
                    {/* <div className='row'> */}
                    {products.map((product, ind) => {
                        return (
                            <div className='col-12 col-md-6 col-lg-3 mb-3' key={ind}>
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                    {/* </div> */}
                </div>
            </div>
            :
            <Loading />
    )
}

export default Products