import React from 'react'

const Contact = () => {
  return (
 
    <div className='2xl:px-52 lg:mx-32 text-center my-24  mx-10 pt-10'>
        <h1 className='font-display  text-secondary_blue text-4xl md:mb-20 md:w-3/4 md:mx-auto'>Submit a help request and we’ll get in touch shortly.</h1>
        <form className='flex flex-col w-3/4 mx-auto mt-16'> 
            <div class=" py-2 mb-7">
                <input 
                    className=" bg-transparent border-b focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue w-full text-secondary_blue mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Jane Doe" 
                    aria-label="Full name"
                    id='name'
                />    
            </div>

            <div class="py-2 mb-7">
                <input 
                    className=" bg-transparent border-b focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue  w-full text-secondary_blue mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Email Address" 
                    aria-label="Email Address"
                    id='email'
                />    
            </div>

            <div class="py-2 mb-7">
                <input 
                    className=" bg-transparent border-b text-secondary_blue focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue  w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Title" 
                    aria-label="title"
                    id='title'
                />    
            </div>
            <div class="py-2 mb-7">
                <input 
                    className=" bg-transparent border-b focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue  w-full text-secondary_blue mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Message" 
                    aria-label="Message"
                    id='message'
                />    
            </div>

            <div className='flex items-center'>   
                <label className='text-secondary_lblue order-2 text-start ml-10' htmlFor='updated'> Stay up-to-date with company announcements and updates to our API</label>
                <input
                    type='checkbox'
                    id='updated'
                    
                />
            </div>
         
           
        
            <button className='border mt-10 border-secondary_blue px-6 py-4 hover:bg-secondary_blue hover:text-white rounded-full w-1/6'>Submit</button>
        </form>
    
    </div>

  )
}

export default Contact