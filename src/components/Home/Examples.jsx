import React from 'react'
import easyImplment from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import phone from '../../assets/home/desktop/illustration-simple-ui.svg'
import finances from '../../assets/home/desktop/icon-personal-finances.svg'
import bank from '../../assets/home/desktop/icon-banking-and-coverage.svg'

const Examples = () => {
  return (
    <div className='bg-secondary_bg mt-20 md:mt-0 lg:mt-20 lg:mx-32 2xl:mx-56 border'>

          {/* <div className='text-center'>
            <p className='mt-10 mb-6 text-secondary_blue text-4xl font-bold'>Easy to implement</p>
            <p className='text-secondary_lblue text-lg w-10/12 mx-auto'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div> */}
    
          <div className='text-center lg:flex lg:items-center  '>
            <div>
              <img className='mx-auto md:scale-75 lg:scale-110  lg:-translate-x-10  pl-4 lg:mr-16' src={phone}/>
            </div>
            <div className='lg:text-start lg:mb-8 lg:translate-x-20 '>
                <p className='md:-mt-24 lg:mt-0 mt-10 mb-6 text-secondary_blue text-4xl font-bold'>Simple UI & UX</p>
                <p className='text-secondary_lblue text-lg w-10/12 mx-auto md:w-7/12 lg:w-8/12 lg:mx-0'>Our pre-built form is easy to integrate in your app or website’s checkout 
        flow and designed to optimize conversion.</p>
            </div>
       
          </div>

          <div className='text-center lg:flex lg:items-center lg:justify-between mt-24 lg:mt-32 md:mt-0 '>
            <div className='lg:order-4'>
              <img className='mx-auto md:scale-75 lg:scale-125 lg:-translate-x-10  pl-4' src={phone}/>
            </div>
            <div className='lg:text-start lg:mb-8  '>
                <p className='md:-mt-24 lg:mt-0 mt-10 mb-6 text-secondary_blue text-4xl  font-bold'>Easy to implement</p>
                <p className='text-secondary_lblue text-lg w-10/12 mx-auto md:w-7/12 lg:w-8/12 lg:mx-0'>Our API comes with just a few lines of code. You'll be up and running in to time. We built our documentation page to integrate payments functionality with issue. </p>
            </div>
       
          </div>

          <div className='lg:flex lg:mt-36 lg:gap-x-12'>
              <div className='mt-24 lg:mt-0 lg:w-1/3'>
                <img className='mx-auto' src={finances}/>
                <p className='text-secondary_blue text-center text-2xl font-bold mt-10 md:mt-5'>Personal Finances</p>
                <p className='lg:w-full text-secondary_lblue text-center mt-6 px-10 lg:px-0 md:w-8/12 md:mx-auto md:mt-2 md:tracking-wide'>  Consolidate financial data from multiple sources and categorize transactions up to
                  2 years of history. Analyze reports to reconcile activities in your account.</p>
              </div>

              <div className='mt-24 md:mt-12 lg:mt-0 lg:w-1/3'>
                <img className='mx-auto' src={bank}/>
                <p className='text-secondary_blue text-center text-2xl font-bold mt-10 md:mt-5'>Banking & Coverage</p>
                <p className='lg:w-full text-secondary_lblue text-center mt-6 px-10 lg:px-0 md:w-8/12 md:mx-auto md:mt-2 md:tracking-wide'>With our platform, you can speed up account onboarding and support ongoing payments 
                  for checking, savings, credit card, and brokerage accounts.</p>
              </div>
              
              <div className='mt-24 md:mt-12 mb-10 lg:mt-0 lg:mb-0 lg:w-1/3'>
                <img className='mx-auto' src={finances}/>
                <p className='text-secondary_blue text-center text-2xl font-bold mt-10 md:mt-5'>Consumer Payments</p>
                <p className='lg:w-full text-secondary_lblue text-center mt-6  lg:px-0 px-10 md:w-8/12 md:mt-2 md:mx-auto md:tracking-wide'> It’s easier to set up secure bank payments with us through a flow designed with the 
                  user experience in mind. Customers could instantly authenticate their account.</p>
              </div>
          </div>



          <div className='text-center mt-10 pb-20 font-display'>
            <p className='text-secondary_blue text-2xl font-semibold '>Ready to start?</p>
            <form className='mt-10'>
            <input
                type='text'
                className='focus:outline-0 md:w-1/2 w-9/12 xl:w-1/3 py-4 px-5 rounded-full text-start text-secondary_lblue font-bold shadow-lg'
                placeholder='Enter email address'
            />
            <br/>
            <button className='md:w-1/2 xl:w-1/3 bg-primary_dark hover:bg-secondary_pink text-white w-9/12 rounded-full py-4 px-6 mt-4 font-semibold'>Schedule a Demo</button>
           </form>
          </div>
          
    




       
     
    </div>
  )
}

export default Examples