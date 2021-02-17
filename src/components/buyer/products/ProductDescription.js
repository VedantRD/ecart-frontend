import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Tabs } from "@feuer/react-tabs";

const ProductDescription = () => {

    const location = useLocation()
    const [product, setProduct] = useState(location.product)

    const styles = {
        fontFamily: "sans-serif",
    };

    return (
        <div className='row px-md-3 mt-md-3 h-100'>
            <div className='col-6 h-100'>
                <img src={product.image} className='img-fluid'></img>
            </div>
            <div className='col-6'>
                <h4 className='mb-3 font-weight-bold'>{product.name}</h4>
                <h5 className='mb-3'>₹ {product.price}</h5>

                {/* Quantity remaining warning */}
                {product.quantity < 5 && <p className='text-danger'>Hurry only {product.quantity} left</p>}

                {/* highlights */}
                {product.highlights.map((highlight, ind) => {
                    return (
                        <p key={ind}>{highlight}</p>
                    )
                })}

                <div style={styles}>
                    <Tabs
                        activeTab={{
                            id: "tab1"
                        }}
                    >
                        <Tabs.Tab id="tab1" title="Description">
                            <div style={{ padding: 10 }}>
                                Best product in the market.
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="Specifications">
                            <div style={{ padding: 10 }}>
                                {Object.keys(product.description).map((key) => {
                                    return (
                                        <div className='mb-2' key={key}>{key} : {product.description[key]}</div>
                                    )
                                })}
                            </div>
                        </Tabs.Tab>
                    </Tabs>
                </div>

                {/* description */}
                {/* <p className='mb-1'>
                    <b>Description :</b>
                </p>
                <p>
                    Best product in the market.
                </p> */}

                {/* specifications */}
                {/* <p className='mb-1'>
                    <b>Specifications :</b>
                </p>
                {Object.keys(product.description).map((key) => {
                    return (
                        <div className='mb-2' key={key}>{key} : {product.description[key]}</div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default ProductDescription
