import iconCheck from '../../assets/shared/desktop/icon-check.svg'
import React, { useState, useEffect } from 'react';

const FreePlan = () => {
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await fetch('https://localhost:44357/api/pricing-plans');
        if (!response.ok) {
          throw new Error('Failed to fetch pricing plans');
        }
        const data = await response.json();
        console.log(data)
        setPricingPlans(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPricingPlans();
  }, []);

  return (
    <>
    <h1 className='text-5xl text-center text-secondary_blue font-display my-24 lg:text-start lg:mx-auto'>Pricing</h1>
    <div className='mb-24 lg:flex lg:justify-between  lg:gap-x-12'>
        {pricingPlans.map(plan => (
            <div className='text-center lg:text-start'>
                <h3 className='text-primary_dark text-3xl font-display my-24 lg:my-12 2xl:my-12'>{plan.name}</h3>
                <p className='hidden lg:block mb-12 w-9/12 2xl:w-8/12   2xl:mb-12 text-secondary_lblue t font-light'>{plan.description}</p>
                <p className='text-secondary_blue text-6xl font-bold font-display'>${plan.price.toFixed(2)}</p>
                <hr className='mt-10 w-10/12 mx-auto lg:w-11/12 lg:mx-0 border-gray-700 mb-10'/>
                <div className=' mx-auto flex flex-col justify-center items-center lg:flex-none lg:justify-start lg:items-start'>
                    {plan.features.map(feature => (
                        <div key={feature} className='flex  mb-4 gap-x-4'>    
                            {feature.enabled && <img className='' src={iconCheck}/>}
                            <p className={`${feature.enabled ? 'text-secondary_blue font-semibold' :'text-secondary_lblue lg:ml-7' } text-lg`}>{feature.name}</p>
                        </div>
                    ))}
                </div>
           
            <button className='text-secondary-blue rounded-full px-6 py-2 border border-secondary_blue mt-8'>Request Access</button>
            </div>
        ))}
    </div>
    </>
  );
}

export default FreePlan;









 






    
  
{/* <div>
    <h2 className='text-primary_dark text-3xl font-display mb-24'>Free Plan</h2>
    <p className='text-secondary_blue text-6xl font-bold font-display'>$0.00</p>
    <hr className='mt-10 w-10/12 mx-auto border-t border-gray-700'/>
    <ul className='text-secondary_blue space-y-2 mt-10'>
        <li>Transactions</li>
        <li>Auth</li>
        <li>Identity</li>
        <div className='text-primary_light space-y-2'>
            <li>Investments</li>
            <li>Assets</li>
            <li>Liabilities</li>
            <li>Income</li>
        </div>
    </ul>
    <hr className='mt-10 w-10/12 mx-auto border-t border-gray-700'/>
    <button className='text-secondary-blue rounded-full px-6 py-2 border border-secondary_blue mt-8'>Request Access</button>
</div>

<div className='mt-36'>
<h2 className='text-primary_dark text-3xl font-display mb-24'>Basic Plan</h2>
<p className='text-secondary_blue text-6xl font-bold font-display'>$249.00</p>
<hr className='mt-10 w-10/12 mx-auto border-t border-gray-700'/>
<ul className='text-secondary_blue space-y-2 mt-10'>
    <li>Transactions</li>
    <li>Auth</li>
    <li>Identity</li>

        <li>Investments</li>
        <li>Assets</li>
        <div className='text-primary_light space-y-2'>
        <li>Liabilities</li>
        <li>Income</li>
    </div>
</ul>
<hr className='mt-10 w-10/12 mx-auto border-t border-gray-700'/>
<button className='text-secondary-blue rounded-full px-6 py-2 border border-secondary_blue mt-8'>Request Access</button>
</div>

<div className='mt-36'>
<h2 className='text-primary_dark text-3xl font-display mb-24'>Premium Plan</h2>
<p className='text-secondary_blue text-6xl font-bold font-display'>$449.00</p>
<hr className='mt-10 w-10/12 mx-auto border-t border-gray-700'/>
<ul className='text-secondary_blue space-y-2 mt-10'>
    <li>Transactions</li>
    <li>Auth</li>
    <li>Identity</li>

        <li>Investments</li>
        <li>Assets</li>
        <li>Liabilities</li>
        <li>Income</li>
</ul>
<hr className='mt-10 w-10/12 mx-auto border-t border-gray-700'/>

</div> */}
