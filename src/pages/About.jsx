import React from 'react'
import happyPeople from '../assets/about/mobile/image-team-members.jpg'
import happyPeopleTablet from '../assets/about/tablet/image-team-members.jpg'
import happyPeopleDesktop from '../assets/about/desktop/image-team-members.jpg'

const About = () => {
  return (
    <div className='2xl:px-52 lg:mx-32 text-center my-24  mx-10 pt-10  '>
        <h1 className='font-display  text-secondary_blue text-4xl md:mb-20 md:w-3/4 md:mx-auto'>We empower innovators by delivering access to the financial system</h1>
        <div className='my-12 md:flex md:gap-x-20'>
            <h2 className='text-secondary_blue md:text-start text-2xl md:text-3xl font-display md:w-1/4'>Our Vision</h2>
            <p className='text-secondary_lblue text-lg mt-6 md:mt-0 leading-relaxed md:text-start md:w-3/4'>Our main goal is to build beautiful consumer experiences along with developer-friendly 
            infrastructure. The result is an intelligent tool that gives everyone the ability to create 
            amazing products that solve big problems. We are deeply focused on democratizing financial 
            services through technology.</p>
        </div>
        <div className='my-12 md:flex  md:gap-x-20'>
            <h2 className='text-secondary_blue md:text-start text-2xl md:text-3xl font-display md:w-1/4'>Our Business</h2>
            <p className='text-secondary_lblue text-lg mt-6 md:mt-0  leading-relaxed md:text-start md:w-3/4'>At the core of our platform is the technical infrastructure APIs that connect consumers. 
            Our innovative product provides key insights for businesses and individuals, as well as 
            robust reporting for traditional financial institutions and developers.</p>
        </div>
        <div className='mx-0 px-0 '>
            <img className='md:hidden block mx-auto ' src={happyPeople}/>   
            <img className='hidden md:block lg:hidden mx-auto   ' src={happyPeopleTablet}/>   
            <img className='hidden lg:block mx-auto border-2' src={happyPeopleDesktop}/>      
        </div>
        <hr className=' mx-auto w-full  mt-10  border-secondary_lblue'/>
        <div className='mt-10 xl:flex xl:justify-between xl:text-start '>
            <div>
                <p className='text-secondary_lblue text-2xl'>Team Members</p> 
                <p className='text-primary_dark text-4xl font-bold my-4'>300+</p>
            </div>
         
            <div>
                <p className='text-secondary_lblue text-2xl mt-4 xl:mt-0'>Offices in the US </p>
                <p className='text-primary_dark text-4xl font-bold my-4'>3</p>
            </div>

            <div>
                <p className='text-secondary_lblue text-2xl mt-4 xl:mt-0'>Transactions analyzed </p>
                <p className='text-primary_dark text-4xl font-bold my-4'>10M+</p>
            </div>
   
        </div>
        <hr className=' mx-auto w-full  mt-10  border-secondary_lblue'/>
        <div className='my-12 md:flex  md:gap-x-20'>
            <h2 className='text-secondary_blue md:text-start text-2xl md:text-3xl font-display md:w-1/4'>The Culture</h2>
            <p className='text-secondary_lblue text-lg mt-6 md:mt-0  leading-relaxed md:text-start md:w-3/4'>We strongly believe there's always an opportunity to learn from each other outside of 
            day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
            We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
        </div>
        <div className='my-12 md:flex  md:gap-x-20'>
            <h2 className='text-secondary_blue md:text-start text-2xl md:text-3xl font-display md:w-1/4'>The People</h2>
            <p className='text-secondary_lblue text-lg mt-6 md:mt-0  leading-relaxed md:text-start md:w-3/4'>We're all passionate about building a more efficient and inclusive financial infrastructure 
            together. At PayAPI, we have diverse backgrounds and skills.</p>
        </div>


   






    </div>
  )
}

export default About