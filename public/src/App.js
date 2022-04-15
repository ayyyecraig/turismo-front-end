import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Register from './components/Register'
import ViewCars from './components/ViewCars'
import ViewParts from './components/ViewParts'

const App = () => {

    return (   
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="login" element={ <LogIn /> } />
                    <Route path="register" element={ <Register /> } />
                    <Route path="viewcars" element={ <ViewCars /> } />
                    <Route path="viewparts" element={ <ViewParts /> } />
                </Routes>
            </main>
        </div>
    )


}

export default App