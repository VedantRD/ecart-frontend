import React from 'react'
import CategoryCard from '../../common/product/CategoryCard'

const Products = () => {
    return (
        <div>
            <div className='row no-gutters justify-content-end align-items-center mb-4 mt-2'>
                <div className='col'>
                    <h5>Showing 3 results</h5>
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
            <div className='row gutter_col_row'>
                <div className='col-6 gutter_col mb-3'>
                    <CategoryCard />
                </div>
                <div className='col-6 gutter_col mb-3'>
                    <CategoryCard />
                </div>
                <div className='col-6 gutter_col mb-3'>
                    <CategoryCard />
                </div>
                {/* Products Category */}
            </div>
        </div>
    )
}

export default Products