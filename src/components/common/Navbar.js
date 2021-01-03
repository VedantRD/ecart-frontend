import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App';
import '../../styles/common/navbar.css'
import Searchbar from './Searchbar';

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext)
    const homeRoute = (state && state.type === 'seller') ? '/seller' : '/buyer'
    const history = useHistory()

    const logout = () => {
        dispatch({ type: 'USER', payload: null })
        localStorage.removeItem('USER')
        history.push('/buyer/login')
    }


    return (
        <div className='myNavbar'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-md-5 px-3">

                {/* logo */}
                <Link className="navbar-brand" to={homeRoute}>Navbar</Link>

                {/* collapsible button */}
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* routes */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100">

                        {/* links */}
                        <Link className="nav-item nav-link ml-md-5 text-light" to={homeRoute}>
                            HOME
                        </Link>
                        <Link className="nav-item nav-link ml-md-3 text-light" to='/about'>
                            ABOUT US
                        </Link>
                        <Link className="nav-item nav-link ml-md-3 text-light" to='/contact'>
                            CONTACT
                        </Link>

                        {/* searchbar */}
                        <Searchbar />

                        {/* login & logout */}
                        {state &&
                            <Link
                                className="nav-item nav-link py-0 mt-md-0 mt-3 px-0"
                                to='/' onClick={logout}
                            >
                                <button className='btn btn-danger px-5 btn-shadow-1'>
                                    Logout
                                </button>
                            </Link>
                        }
                        {state === null &&
                            <Link className="nav-item nav-link py-0 mt-md-0 mt-3 px-0"
                                to='/buyer/login'
                            >
                                <button className='btn btn-success px-5 rounded-0 btn-shadow-1'>
                                    Login
                                </button>
                            </Link>
                        }

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
