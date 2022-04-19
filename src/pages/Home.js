import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = ({ authenticated, user }) => {
 
  let navigate = useNavigate()
  let authenticatedOptions
  if(user){ 
    authenticatedOptions = (
      
        <div className="home-container col">
          <button onClick={() => navigate('/garage')}>
           My Garage
          </button>
         
        </div>
      )
  }
  const publicOptions = (
        <div className="home-container col">
            <h1>Welcome to Car App</h1>

      <section className="welcome-signin">
        <button onClick={() => navigate('/login')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )

  return (
    <div>
    {authenticated && user ? authenticatedOptions: publicOptions}
    </div>
  )

}
export default Home