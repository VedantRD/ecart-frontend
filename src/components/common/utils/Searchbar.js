import React from 'react'
import '../../../styles/common/searchbar.css'

const Searchbar = () => {
    return (
        <form className="form-inline ml-auto mySearchbar">
            <input
                className="form-control w-75" type="search"
                placeholder="Search Product Here" aria-label="Search"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <button
                className="btn btn-success w-25" type="submit"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
                Search
            </button>
        </form>
    )
}

export default Searchbar
