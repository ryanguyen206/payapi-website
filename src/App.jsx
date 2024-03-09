import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'


function App() {
  return (
    <div className='bg-secondary_bg'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
