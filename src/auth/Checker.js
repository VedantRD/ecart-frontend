import React, { useState, useEffect } from 'react'
import AuthNavigation from '../navigation/AuthNavigation'
import SellerNavigation from '../navigation/SellerNavigation'
import UserNavigation from '../navigation/UserNavigation'

const Checker = () => {
    const [Navigate, setNavigate] = useState(<AuthNavigation />)

    useEffect(() => {
        const userLoggedIn = JSON.parse(localStorage.getItem('USER'))
        const sellerLoggedIn = JSON.parse(localStorage.getItem('SELLER'))

        if (userLoggedIn) {
            setNavigate(<UserNavigation />)
        }
        else if (sellerLoggedIn) {
            setNavigate(<SellerNavigation />)
        }

    }, [])

    return (Navigate)
}

export default Checker
