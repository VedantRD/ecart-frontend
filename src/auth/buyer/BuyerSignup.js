import React, { useState, useContext } from 'react';
import axios from 'axios'
import { config } from '../../config';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const BuyerSignup = () => {
    const { dispatch } = useContext(UserContext)
    const history = useHistory()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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
            axios.post(`${url}/buyer/signup`, {
                name: name,
                email: email,
                password: password
            })
                .then((res) => {
                    if (res.data.status === 'success') {
                        alert(res.data.message)
                        res.data.user.type = 'buyer'
                        dispatch({ type: 'USER', payload: res.data.user })
                        localStorage.setItem('USER', JSON.stringify(res.data.user))
                        history.push('/buyer')
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
                    <label htmlFor="uInputEmail">Email address</label>
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
            <Link to='/buyer/login'>Goto user login</Link>
        </>
    )
}

export default BuyerSignup