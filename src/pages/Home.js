import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
            <h1>Welcome to Car App</h1>

      <section className="welcome-signin">
        <button onClick={() => navigate('/login')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home