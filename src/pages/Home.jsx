import React from 'react'
import Hero from '../components/Home/Hero'
import Collaboration from '../components/Home/Collaboration'
import Examples from '../components/Home/Examples'
const Home = () => {
  return (
    <div className='mt-10 lg:pt-16'>
        <Hero/>
        <Collaboration/>
        <Examples/>

    </div>
     
   
  )
}

export default Home