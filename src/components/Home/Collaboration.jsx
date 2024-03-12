import React from 'react'
import microsoft from '../../assets/shared/desktop/microsoft.svg'
import tesla from '../../assets/shared/desktop/tesla.svg'
import nvidia from '../../assets/shared/desktop/nvidia.svg'
import oracale from '../../assets/shared/desktop/oracle.svg'
import hewlett from '../../assets/shared/desktop/hewlett-packard.svg'
import google from '../..//assets/shared/desktop/google.svg'

const Collaboration = () => {
  return (
    <div className='bg-secondary_black text-white px-10 py-20 2xl:px-80 text-center 2xl:flex 2xl:justify-between'>
      
        <div className='2xl:w-7/12  mb-16 2xl:mb-10 2xl:order-3 grid grid-cols-2 grid-rows-2 gap-10 2xl:place-items-center 2xl:place-self-center justify-items-center  md:grid-cols-3 md:grid-rows-2'>
            <img className='text-white' src={tesla}/>
            <img className='' src={microsoft}/>
            <img src={hewlett}/>
            <img src={oracale}/>
            <img src={google}/>
            <img src={nvidia}/>
        </div>
        <div className='2xl:text-start 2xl:w-5/12 2xl:mr-10'>
          <p className='text-3xl mt-20 md:mt-0 tracking-wide font-sans'>Who we work with</p>
          <p className='text-primary_light font-light mt-4 leading-loose text-lg lg:w-8/12 lg:mx-auto 2xl:w-full'> Today, millions of people around the world have successfully connected 
              their accounts to apps they love using our API. We provide developers 
              with the tools they need to create easy and accessible experiences 
              for their users.
            
          </p>
          <button className='mt-10 border rounded-full py-3 px-8 text-xl hover:bg-white hover:text-black'>About Us</button>
        </div>
       
    </div>
  )
}

export default Collaboration