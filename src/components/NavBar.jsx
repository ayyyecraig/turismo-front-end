import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    // let authenicatedOptions
    // if(user){
    //     authenicatedOptions = (
    //         <nav>
    //             <h3>Hello, {user.email}</h3>
    //             <Link to="/">Home</Link>
    //             <Link to="/garage">Garage</Link>
    //             {/* 11-13 might need to be modified once we test our run thru on the app */}
    //             <Link onClick={handleLogOut} to="/">
    //                 Log Out
    //             </Link> 
    //             <Link to="/cars">Car Lot</Link>
    //             <Link to="/parts">Specs and Mods</Link>
    //         </nav>
    //     )
    // }

    // const publicOptions = (
    //     <nav>
    //         <Link to="/">Home</Link>
    //         <Link to="/login">Garage</Link>
    //         <Link to="register">Register</Link>
    //         <Link to="/cars">Car Lot</Link>
    //         <Link to="/parts">Specs and Mods</Link>
    //     </nav>
    // )
    return (
        <nav className="navbar">
            <div>
                <Link to='/' className="links">Home</Link>
                <Link to='/login' className="links">Log In</Link>
                <Link to='/register' className="links">Register</Link>
                <Link to='/garage' className="links">Garage</Link>
                <Link to='/parts' className="links">Buy Parts</Link>
                If logged in
                <p>Hello [name]</p>
            </div>
        </nav>
    )
}

export default Nav