import React from 'react'
import phone from '../../assets/home/desktop/illustration-phone-mockup.svg'
import patternCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-center px-4 lg:px-0 lg:mx-32 2xl:mx-80 lg:flex'>
    <div className='lg:order-last lg:w-5/12 lg:scale-x-110'>
      <img className='mx-auto pl-10'src={phone}/>
    </div>
    <div className='lg:order-1 lg:mt-10 lg:w-8/12  lg:flex lg:flex-col lg:justify-center lg:text-start'>
      <h1 className='lg:mt-0 text-secondary_blue text-4xl font-display font-medium lg:text-left lg:mx-0 lg:px-0 lg:text-5xl xl:text-6xl -mt-16 px-10 md:w-3/4 md:mx-auto lg:leading-normal'>Start building with our APIs for absolutely free</h1>
      <form className='mt-10 lg:flex '>
          <input
              type='text'
              className='focus:outline-0 w-8/12 md:w-6/12 lg:w-1/2 xl:w-5/12 py-4 px-5 rounded-full text-start text-secondary_lblue font-bold shadow-lg'
              placeholder='Enter email address'
          />
          <br/>
          <button className='bg-primary_dark lg:-ml-10 lg:w-5/12 2xl:-ml-10 w-8/12 md:w-6/12 xl:w-1/3  hover:bg-secondary_pink text-white  rounded-full py-4 px-6 mt-4 lg:mt-0 font-semibold'>Schedule a Demo</button>
      </form>
      <p className='text-neutral text-secondary_lblue mt-8 mb-20 font-medium'>Have any questions? <span className='font-bold'><Link className='hover:text-gray-400' to='/contact'>Contact Us</Link></span></p>
    </div>
   
</div>
  )
}

export default Hero