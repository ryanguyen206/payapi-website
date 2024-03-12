import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import '../App.css'
import menu from '../assets/shared/mobile/menu.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between mx-10 pt-10 lg:mx-32 2xl:mx-80'>
      <Link to='/'><img src={logo}/></Link>

      <div className='lg:hidden'>
        <img src={menu}/>
      </div>
    

      <div className='hidden lg:flex items-center  w-full justify-between'>
        <ul className='flex text-secondary_blue ml-14 space-x-5 text-xl'>
          <li className='hover:text-primary_light cursor-pointer '><Link to='/pricing'>Pricing</Link></li>
          <li className='hover:text-primary_light  cursor-pointer '>About</li>
          <li className='hover:text-primary_light cursor-pointer '>Contact</li>
        </ul>
        <button className='bg-primary_dark hover:bg-secondary_pink z-10 rounded-full text-white px-6 py-3 z-1 lg:-ml-16'>Schedule a demo</button>
  
      </div>
     
    </div>
 
    </>

  )
}

export default Navbar