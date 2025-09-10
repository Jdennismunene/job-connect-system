import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Register from './components/Register'
import Contact from './components/Contact'
import Jobs from './components/Jobs'

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
