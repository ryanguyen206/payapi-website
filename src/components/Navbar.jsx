import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import patternCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import menu from '../assets/shared/mobile/menu.svg'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 pt-10'>
      <img src={logo}/>
      <img src={menu}/>
      
      
      {/* <img className='border absolute -top-40' src={patternCircle}/> */}


    </div>
  )
}

export default Navbar