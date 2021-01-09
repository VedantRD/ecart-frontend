import React from 'react'

const AddressCard = () => {
    return (
        <div className='border'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-3'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU' alt='profile pic' className='w-100 h-50'></img>
                    </div>
                    <div className='col-9'>
                        <h5>Vedant Rajesh Debadwar</h5>
                        <p>
                            Flat 102, Raj residensy O, Shardanagar near Anandnagar<br />
                            Nanded - 431605<br />
                            9422965894<br />
                            <button className='btn btn-outline-primary w-100 mt-3'>
                                Edit Info
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
