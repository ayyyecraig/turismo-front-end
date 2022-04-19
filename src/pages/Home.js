import React from 'react'



const Home = ({authenicated, user}) => {

  let authenicatedOptions
  if(user){
    authenicatedOptions = (
      
        <div className="home-container col">
          <h1>Welcome to Car App</h1>

          <button onClick={() => navigate('/garage')   }>
           Click Here To Get Started
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
    {authenticated && user ? authenticatedOptions : publicOptions}
    </div>
  )

}
export default Home