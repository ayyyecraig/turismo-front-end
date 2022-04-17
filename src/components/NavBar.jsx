import { Link } from 'react-router-dom'

const NavBar = ({ authenicated, user, handleLogOut}) => {
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

    const publicOptions = (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Garage</Link>
            <Link to="register">Register</Link>
            <Link to="/cars">Car Lot</Link>
            <Link to="/parts">Specs and Mods</Link>
        </nav>
    )
    return (
      <header>
          <Link to="/">
            <div>
              <h3>Car land Vroom Vroom</h3>
            </div>
          </Link>
          {/* {authenticated && user ? authenticatedOptions : publicOptions} : */}
      </header>
    )
}

export default NavBar