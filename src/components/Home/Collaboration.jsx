import React from 'react'
import microsoft from '../../assets/shared/desktop/microsoft.svg'
import tesla from '../../assets/shared/desktop/tesla.svg'
import nvidia from '../../assets/shared/desktop/nvidia.svg'
import oracale from '../../assets/shared/desktop/oracle.svg'
import hewlett from '../../assets/shared/desktop/hewlett-packard.svg'
import google from '../..//assets/shared/desktop/google.svg'

const Collaboration = () => {
  return (
    <div className='bg-secondary_black text-white px-10 py-20 text-center'>
      
        <div className='grid grid-cols-2 grid-rows-2 gap-10 justify-items-center'>
            <img className='text-white' src={tesla}/>
            <img className='' src={microsoft}/>
            <img src={hewlett}/>
            <img src={oracale}/>
            <img src={google}/>
            <img src={nvidia}/>
        </div>
        <p className='font-display text-3xl mt-20 tracking-wide'>Who we work with</p>
        <p className='text-primary_light font-light mt-4 leading-loose text-lg'> Today, millions of people around the world have successfully connected 
            their accounts to apps they love using our API. We provide developers 
            with the tools they need to create easy and accessible experiences 
            for their users.
           
        </p>
        <button className='mt-10 border rounded-full py-3 px-8 text-xl'>About Us</button>
    </div>
  )
}

export default Collaboration