import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = ({ authenticated, user }) => {
 
  let navigate = useNavigate()
  let authenticatedOptions
  if(user){ 
    authenticatedOptions = (
      
        <div className="home-container col">
          <h3 className='duemila'>Head to your Garage</h3>
          <button className="start2" onClick={() => navigate('/garage')}>
           My Garage
          </button>
         
        </div>
      )
  }
  const publicOptions = (
        <div className="home-container">
            <h1 className='duemila'>Duemila Ruote</h1>

      <section className="welcome-signin">
        <button className='start' onClick={() => navigate('/login')}>
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