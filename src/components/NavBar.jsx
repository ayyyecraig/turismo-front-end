import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if(user){
        authenticatedOptions = (
            <nav className='authenticated'>
                <Link to="/" className='links'>Home</Link>
                <Link to="/garage" className='links'>Garage</Link>
                <Link to="/cars" className='links'>Car Lot</Link>
                <Link to="/parts" className='links'>Specs and Mods</Link>
                {/* <h3>Hello, {user.email}</h3> */}
           
              <Link onClick={handleLogOut} to="/" className='logout'>
                    Log Out
                </Link> 
            
            </nav>
            
        )
    }

    const publicOptions = (
        <nav>
            <Link to="/" className='links'>Home</Link>
            <Link to="/login" className='links'>Garage</Link>
            <Link to="/cars" className='links'>Car Lot</Link>
            <Link to="/parts" className='links'>Specs and Mods</Link>
            <Link to="register" className='links'>Register</Link>
        </nav>
    )
    return (
        <nav className="navbar">
            <div>
                <img src="https://i.imgur.com/6Iiup0H.png" className="car-graphic" alt="car graphic" />
               
                {authenticated && user ? authenticatedOptions : publicOptions}
            </div>
        </nav>
    )
}

export default Nav