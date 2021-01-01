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
        <div>
            <form onSubmit={(e) => login(e)}>
                <div className="form-group">
                    <label htmlFor="uInputEmail">Email address</label>
                    <input type="email" className="form-control"
                        id="uInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uInputPassword">Password</label>
                    <input type="password" className="form-control"
                        id="uInputPassword" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to='/buyer/signup'>Goto user register</Link>
            <Link to='/seller/login'>Goto seller login</Link>
            <Link to='/seller/signup'>Goto seller register</Link>
        </div>
    )
}

export default BuyerLogin
