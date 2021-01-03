import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { config } from '../../config';
import { UserContext } from '../../App';

const BuyerLogin = () => {
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
        } else {
            axios.post(`${url}/buyer/signin`, {
                email: email,
                password: password
            }).then((res) => {
                res.data.user.type = 'buyer'
                if (res.data.status === 'success') {
                    dispatch({ type: 'USER', payload: res.data.user })
                    localStorage.setItem('USER', JSON.stringify(res.data.user))
                    alert('logged in succesfully')
                    history.push('/buyer')
                } else {
                    alert(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <div className='row no-gutters h-100 align-items-center py-4'>
            <div className='col-12 col-md-6 col-padder'>
                <div className='card no-border-sm card-shadow-2'>
                    <div className='card-body'>
                        <form onSubmit={(e) => login(e)}>
                            <h1 className='text-center mb-5 mt-2'>Login</h1>
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
                                <button type="submit" className="btn btn-primary w-75 mt-5 my-md-5">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 col-padder-right'>
                <p className='text-center'>New User ?</p>
                <div className='d-flex justify-content-center'>
                    <Link to='/buyer/signup'><u className='h4'>Register Here</u></Link>
                </div>
                <h5 className='text-center type-through'>
                    <span>OR</span>
                </h5>
                <p className='my-4 text-center'>Want to sell your products ?</p>
                <div className='row'>
                    <div className='col'>
                        <Link to='/seller/login' className='btn btn-primary d-block w-100'>Seller Login</Link>
                    </div>
                    <div className='col'>
                        <Link to='/seller/signup' className='btn btn-primary d-block w-100'>Seller Register</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BuyerLogin
