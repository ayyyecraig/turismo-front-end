import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to='/' className="links">Home</Link>
                <Link to='/login' className="links">Log In</Link>
                <Link to='/register' className="links">Register</Link>
                <Link to='/viewcars' className="links">Garage</Link>
                <Link to='/viewparts' className="links">Buy Parts</Link>
                {/* If logged in */}
                {/* <p>Hello [name]</p> */}
            </div>
        </nav>
    )
}

export default Nav