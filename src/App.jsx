import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Footer from './components/Footer'
import Contact from './pages/Contact';


function App() {
  return (
    <div className='bg-secondary_bg flex flex-col min-h-screen'>
      <div className="flex-grow">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/about' element={<About/>}></Route>        
          <Route path='/contact' element={<Contact/>}></Route>    
        </Routes>
      </div>
    
      <footer class="bg-gray-200">
          <Footer/>
      </footer>
    </div>
  )
}

export default App
