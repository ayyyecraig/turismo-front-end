import React from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/NavBar'
import Home from './pages/Home'
import Car from './pages/Car'
import CarDetails from './pages/CarDetails'
import Garage from './pages/Garage'
import Parts from './pages/Parts'
import PartDetails from './pages/PartDetails'
import Reviews from './components/Reviews'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import './App.css'

import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
  
export default function App() {
    const [authenticated, toggleAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
  
  
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  
  
    const handleLogOut = () => {
   
      setUser(null)
      toggleAuthenticated(false)
      localStorage.clear()
    }
  
    useEffect(() =>{
      const token = localStorage.getItem('token')
  
      if (token) {
        checkToken()
      }
    }, [])

    return (
        <div>
            <Nav
                authenticated={authenticated}
                user={user}
                handleLogOut={handleLogOut} 
                />
            <main>
                <Routes>
                    <Route path="/" element={<Home   
                     authenticated={authenticated}
                    user={user} />} 
                    />
                    <Route path="/garage" element={<Garage 
                    user={user}
                    authenticated={authenticated}/>} />
                    <Route path="/cars" element={<Car />} />
                    <Route path="/parts" element={<Parts />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LogIn setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="parts/:id" element={<PartDetails />} />
                    <Route path="cars/view/:car_id" element={<CarDetails /> } />
                </Routes>
            </main>
        </div>
    )
   
}



