import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Footer from './components/Footer'


function App() {
  return (
    <div className='bg-secondary_bg'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
