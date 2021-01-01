import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App';

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const logout = () => {
        dispatch({ type: 'USER', payload: null })
        localStorage.removeItem('USER')
        history.push('/buyer/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to='/'>Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to='/'>About Us</Link>
                    <Link className="nav-item nav-link" to='/'>Contact</Link>
                    {state && <Link className="nav-item nav-link" to='/' onClick={logout}>Logout</Link>}
                    {state === null && <Link className="nav-item nav-link" to='/buyer/login'>Login</Link>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
