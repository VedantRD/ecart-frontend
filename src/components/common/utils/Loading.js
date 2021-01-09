import React from 'react'

const Loading = () => {
    return (
        <div className='my-spinner-wrapper'>
            <div className="spinner-border text-primary my-spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
