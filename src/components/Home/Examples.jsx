import React from 'react'
import easyImplment from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import phone from '../../assets/home/desktop/illustration-simple-ui.svg'
import finances from '../../assets/home/desktop/icon-personal-finances.svg'
import bank from '../../assets/home/desktop/icon-banking-and-coverage.svg'

const Examples = () => {
  return (
    <div className='bg-secondary_bg mt-20'>

          {/* <div className='text-center'>
            <p className='mt-10 mb-6 text-secondary_blue text-4xl font-bold'>Easy to implement</p>
            <p className='text-secondary_lblue text-lg w-10/12 mx-auto'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
          </div> */}
    
          <div className='text-center'>
            <img src={phone}/>
            <p className='mt-10 mb-6 text-secondary_blue text-4xl font-bold'>Simple UI & UX</p>
            <p className='text-secondary_lblue text-lg w-10/12 mx-auto'>Our pre-built form is easy to integrate in your app or website’s checkout 
    flow and designed to optimize conversion.</p>
          </div>


          <div className='mt-24'>
            <img className='mx-auto' src={finances}/>
            <p className='text-secondary_blue text-center text-2xl font-bold mt-10'>Personal Finances</p>
            <p className='text-secondary_lblue text-center mt-6 px-10'>  Consolidate financial data from multiple sources and categorize transactions up to
    2 years of history. Analyze reports to reconcile activities in your account.</p>
          </div>

          <div className='mt-24'>
            <img className='mx-auto' src={bank}/>
            <p className='text-secondary_blue text-center text-2xl font-bold mt-10'>Banking & Coverage</p>
            <p className='text-secondary_lblue text-center mt-6 px-10'>With our platform, you can speed up account onboarding and support ongoing payments 
    for checking, savings, credit card, and brokerage accounts.</p>
          </div>
          
          <div className='mt-24'>
            <img className='mx-auto' src={finances}/>
            <p className='text-secondary_blue text-center text-2xl font-bold mt-10'>Consumer Payments</p>
            <p className='text-secondary_lblue text-center mt-6 px-10'> It’s easier to set up secure bank payments with us through a flow designed with the 
    user experience in mind. Customers could instantly authenticate their account.</p>
          </div>
          
    




       
     
    </div>
  )
}

export default Examples