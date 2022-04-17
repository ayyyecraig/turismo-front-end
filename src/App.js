import React from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Car from './pages/Car'
import Garage from './pages/Garage'
import Parts from './pages/Parts'
import Reviews from './pages/Reviews'
import Register from './pages/Register'
import LogIn from './pages/LogIn'

import { CheckSession } from './services/Auth'
import { useEffect } from 'react'
  
export default function App() {
//     const [authenticated, toggleAuthenticated] = useState(false)
//     const [user, setUser] = useState(null)
  
  
//   const checkToken = async () => {
//     const user = await CheckSession()
//     setUser(user)
//     toggleAuthenticated(true)
//   }
  
  
//     const handleLogOut = () => {
   
//       setUser(null)
//       toggleAuthenticated(false)
//       localStorage.clear()
//     }
  
//     useEffect(() =>{
//       const token = localStorage.getItem('token')
  
//       if (token) {
//         checkToken()
//       }
//     }, [])

    return (
        <div>
            <NavBar
                // authenicated={authenicated}
                // user={user}
                // handleLogOut={handleLogOut} 
                />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/garage" element={<Garage />} />
                    <Route path="/cars" element={<Car />} />
                    <Route path="/parts" element={<Parts />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </main>
        </div>
    )
   
}



