import axios from 'axios'
import React, { useState, useContext } from 'react'
import { config } from '../../../config'
import { UserContext } from '../../../App'
import { useHistory } from 'react-router-dom'

const AddProduct = () => {

    const { state } = useContext(UserContext)
    const history = useHistory()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [highlights, setHighlights] = useState([])
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState(0)
    const [image, setImage] = useState(null)

    // console.log(image)

    const handleImage = (e) => {
        if (e.target.files.length) {
            setImage(e.target.files[0]);
        }
    }

    const createProduct = () => {

        let highlightsArr = highlights.split(',')
        const newProduct = {
            name, price, discount, highlights: highlightsArr, quantity, category, description, ownedBy: state._id
        }
        axios.post(`${config.url}/seller/addproduct`, newProduct)
            .then(res => {
                console.log(res)
                if (res.data.status === 'success') {
                    history.push('/seller/products')
                }
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className='row h-100 justify-content-center align-items-center'>
            <div className='col px-md-5'>
                <div className='card card-shadow-2'>
                    <div className='card-body'>
                        <h3 className='card-title mb-4'>Add New Product</h3>
                        <div className='row h-100 justify-content-center align-items-center'>
                            {/* <h5 className='text-muted text-center mt-4'>Add your new product here.</h5> */}
                            <div className='col-8'>
                                <form>
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="text" className="form-control"
                                            placeholder="enter product name" value={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea type="text" className="form-control" placeholder="enter product description" value={description}
                                            onChange={(e) => { setDescription(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <label>Highlights</label>
                                        <input type="text" className="form-control" placeholder="Best in the market, Limited edition, Value for money, etc" value={highlights}
                                            onChange={(e) => { setHighlights(e.target.value) }} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label>Price</label>
                                            <input type="number" className="form-control" placeholder='enter price in ₹' value={price}
                                                onChange={(e) => { setPrice(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Discount in %</label>
                                            <input type="number" className="form-control" placeholder='5' value={discount}
                                                onChange={(e) => { setDiscount(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Quantity</label>
                                            <input type='number' className="form-control" placeholder='100' value={quantity}
                                                onChange={(e) => { setQuantity(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Select Category</label>
                                        <select className="form-control" value={category}
                                            onChange={(e) => { setCategory(e.target.value) }}>
                                            <option>Choose category..</option>
                                            <option value='Electronics'>Electronics</option>
                                            <option value='Household'>Household</option>
                                            <option value='Clothing'>Clothing</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className='col-4 text-center justify-content-center p-0'>
                                <label htmlFor="upload-button" className=''>
                                    {image ?
                                        <>
                                            <img src={URL.createObjectURL(image)} className='h-75 w-75' style={{ cursor: 'pointer' }} />
                                            <h5 className='btn btn-outline-dark mt-4' style={{ cursor: 'pointer' }}>Change Image</h5>
                                        </>
                                        :
                                        <>
                                            <h5 className='btn btn-outline-dark' style={{ cursor: 'pointer' }}>Upload Product Image</h5>
                                        </>
                                    }
                                </label>
                                <input type="file" id="upload-button" style={{ display: 'none' }} className=' bg-danger' onChange={handleImage} />
                            </div>
                            <button className="btn btn-primary w-25 mt-4 mb-2" onClick={createProduct}>
                                Add Product For Sale
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
