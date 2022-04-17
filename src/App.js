import React from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'

  
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
                <header>
                   <NavBar />
                </header>
        <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
  
      </main>
            </div>
  
    )
}



