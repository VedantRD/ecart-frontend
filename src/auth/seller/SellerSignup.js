import React, { useState, useContext } from 'react';
import axios from 'axios'
import { config } from '../../config';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const SellerSignup = () => {
    const history = useHistory
    const { dispatch } = useContext(UserContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const url = config.url

    //Register Function
    const register = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords doesn't match")
            setPassword("")
            setConfirmPassword("")
        } else {
            axios.post(`${url}/seller/signup`, {
                name: name,
                email: email,
                password: password,
                mobileno: mobileNo,
                address: address
            })
                .then((res) => {
                    if (res.data.status === 'success') {
                        res.data.user.type = 'seller'
                        alert(res.data.message)
                        dispatch({ type: 'USER', payload: res.data.user })
                        localStorage.setItem('USER', JSON.stringify(res.data.user))
                        history.push('/seller')
                    } else {
                        alert(res.data.message)
                    }
                })
                .catch(err => { console.log(err) })
        }
    }

    return (
        <>
            <form onSubmit={(e) => register(e)}>
                <div className="form-group">
                    <label htmlFor="uInputName">Name</label>
                    <input
                        type="text" className="form-control" id="uInputName"
                        placeholder="Enter Name" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uInputEmail">Email</label>
                    <input type="email" className="form-control"
                        id="uInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                </small>
                </div>
                <div className="form-group">
                    <label htmlFor="uInputMobile">Mobile Number</label>
                    <input className="form-control"
                        id="uInputMobileNo"
                        placeholder="Enter Mobile Number" value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uInputMobile">Address</label>
                    <input className="form-control"
                        id="uInputMobileNo"
                        placeholder="Enter Address" value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uInputPassword">Password</label>
                    <input type="password" className="form-control"
                        id="uInputPassword" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="uInputPassword2"
                        placeholder="Confirm Password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to='/seller/login'>Goto seller login</Link>

        </>
    )
}

export default SellerSignup
