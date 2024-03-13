import React from 'react'
import logo from '../assets/home/desktop/logo-white.svg'
import twitter from '../assets/shared/desktop/twitter.svg'
import linkedin from '../assets/shared/desktop/linkedin.svg'
import facebook from '../assets/shared/desktop/facebook.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='bg-secondary_black text-center py-10  lg:px-32 2xl:px-80  lg:flex lg:items-center justify-between'>
        <div>
          <img className='scale-75 mx-auto lg:mx-0' src={logo}/>
        </div>
        <div>
          <ul className='text-primary_light mt-10 lg:mt-0 lg:space-y-0 space-y-4 md:text-md lg:flex lg:space-x-10'>
              <li className='hover:text-white cursor-pointer max-w-max mx-auto'><Link to='/pricing'>Pricing</Link></li>
              <li className='hover:text-white cursor-pointer max-w-max mx-auto'><Link to='/about'>About</Link></li>
              <li className='hover:text-white cursor-pointer max-w-max mx-auto'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>  
       
        <div className='flex justify-center gap-x-10 mt-8 lg:mt-0 '>
          <img className='hover:-translate-y-1 transition ease-in-out cursor-pointer' src={twitter}/>
          <img className='hover:-translate-y-1 transition ease-in-out cursor-pointer' src={linkedin}/>
          <img className='hover:-translate-y-1 transition ease-in-out cursor-pointer' src={facebook}/>
        </div>
        
    </div>
    </>
  )
}

export default Footer