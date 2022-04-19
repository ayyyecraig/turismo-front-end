import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if(user){
        authenticatedOptions = (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/garage">Garage</Link>
                <Link to="/cars">Car Lot</Link>
                <Link to="/parts">Specs and Mods</Link>
                <h3>Hello, {user.email}</h3>
                <Link onClick={handleLogOut} to="/">
                    Log Out
                </Link> 
            </nav>
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Garage</Link>
            <Link to="/cars">Car Lot</Link>
            <Link to="/parts">Specs and Mods</Link>
            <Link to="register">Register</Link>
        </nav>
    )
    return (
        <nav className="navbar">
            <div>
               
                {authenticated && user ? authenticatedOptions : publicOptions}
            </div>
        </nav>
    )
}

export default Nav