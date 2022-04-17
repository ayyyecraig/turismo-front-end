import React from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'

  
export default function App() {

    
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



