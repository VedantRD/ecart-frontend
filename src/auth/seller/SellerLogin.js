import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { config } from '../../config';
import { UserContext } from '../../App';

const SellerLogin = () => {
    const { dispatch } = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = config.url
    const history = useHistory()

    //Login Function
    const login = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("All fields required")
        }
        else {
            axios.post(`${url}/seller/signin`, {
                email: email,
                password: password
            }).then((res) => {
                res.data.user.type = 'seller'
                if (res.data.status === 'success') {
                    dispatch({ type: 'USER', payload: res.data.user })
                    localStorage.setItem('USER', JSON.stringify(res.data.user))
                    alert('logged in succesfully')
                    history.push('/seller')
                } else {
                    alert(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div className='row no-gutters justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-6 col-lg-4'>
                <div className='card no-border-sm card-shadow-2'>
                    <div className='card-body'>
                        <form onSubmit={(e) => login(e)}>
                            <h1 className='text-center mb-4 mt-2'>Seller Login</h1>
                            <div className="form-group">
                                <label htmlFor="uInputEmail">Email</label>
                                <input type="email" className="form-control"
                                    id="uInputEmail" aria-describedby="emailHelp"
                                    placeholder="Enter email" value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uInputPassword">Password</label>
                                <input type="password" className="form-control"
                                    id="uInputPassword" placeholder="Enter password" value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn btn-primary w-75 mt-5 mb-4">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerLogin
