import React, {useState, useEffect} from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import '../App.css'
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (



    <>
    <div className='flex items-center justify-between mx-10 pt-10 lg:mx-32 2xl:mx-80'>
      <Link to='/'><img src={logo}/></Link>

      <div className='lg:hidden cursor-pointer'>
          {!isOpen && <img onClick={() => setIsOpen(true)}  src={menu}/>}
      </div> 
    
      <div className='hidden lg:flex items-center  w-full justify-between'>
        <ul className='flex text-secondary_blue ml-14 space-x-5 text-xl'>
          <li className='hover:text-primary_light cursor-pointer '><Link to='/pricing'>Pricing</Link></li>
          <li className='hover:text-primary_light  cursor-pointer '><Link to='/about'>About</Link></li>
          <li className='hover:text-primary_light cursor-pointer '><Link to='/contact'>Contact</Link></li>
        </ul>
        <button className='bg-primary_dark hover:bg-secondary_pink z-10 rounded-full text-white px-6 py-3 z-1 lg:-ml-16'>Schedule a demo</button>
      </div>

      {/* small */}
    </div>


    
    {isOpen && 
        <div className='absolute left-56 right-0 top-0 bottom-0 bg-secondary_black opacity-95 text-white'>
          <div className='absolute top-10 right-8 cursor-pointer'>
              <img src={close} onClick={() => setIsOpen(false)}/>
          
          </div>

          <hr className='absolute top-20 border-t-2'/>

         
          <ul className='flex flex-col justify-center items-center mt-16 gap-y-6 font-display   text-secondary_bg mx-auto  text-xl'>
         
            <li className='hover:text-primary_light cursor-pointer '><Link to='/pricing' onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li className='hover:text-primary_light  cursor-pointer '><Link to='/about' onClick={() => setIsOpen(false)}>About</Link></li>
            <li className='hover:text-primary_light cursor-pointer '><Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      }
 
    </>

  )
}

export default Navbar