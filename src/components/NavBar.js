import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    <nav className="navbar">
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
            <Link to='/viewcars'>View Cars</Link>
            <Link to='/viewparts'>View Parts</Link>
        </div>
    </nav>

}

export default Nav