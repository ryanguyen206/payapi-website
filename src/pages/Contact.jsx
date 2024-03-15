import React, { useState } from 'react'
import axios from 'axios'
const Contact = () => {


    const [formValues, setFormValues] = useState({
        Name: '',
        Email: '',
        Title: '',
        Body: ''
    })


    const handleChange = (e) => {
        setFormValues(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/contact`, formValues, {
            headers:{
                'Content-Type':'application/json'
            }
        
        })
        if (res.status === 200) {
            setFormValues({
                Name: '',
                Email: '',
                Title: '',
                Body: ''
            })
        }
  
    }

  return (
 
    <div className='2xl:px-52 lg:mx-32 text-center my-24  mx-10 pt-10'>
        <h1 className='font-display  text-secondary_blue text-4xl md:mb-20 md:w-3/4 md:mx-auto'>Submit a help request and we’ll get in touch shortly.</h1>
        <form className='flex flex-col w-3/4 mx-auto mt-16'> 
            <div className=" py-2 mb-7">
                <input 
                    className=" bg-transparent border-b focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue w-full text-secondary_blue mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Jane Doe" 
                    aria-label="Full name"
                    id='Name'
                    value={formValues.Name}
                    onChange={(e) => handleChange(e)}
                />    
            </div>

            <div className="py-2 mb-7">
                <input 
                    className=" bg-transparent border-b focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue  w-full text-secondary_blue mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Email Address" 
                    aria-label="Email Address"
                    value={formValues.Email}
                    id='Email'
                    onChange={(e) => handleChange(e)}
                />    
            </div>

            <div className="py-2 mb-7">
                <input 
                    className=" bg-transparent border-b text-secondary_blue focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue  w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Title" 
                    aria-label="Title"
                    id='Title'
                    value={formValues.Title}
                    onChange={(e) => handleChange(e)}
                />    
            </div>
            <div className="py-2 mb-7">
                <input 
                    className=" bg-transparent border-b focus:border-b-2 border-y-primary_light focus:border-b-secondary_blue  w-full text-secondary_blue mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Body" 
                    aria-label="Body"
                    id='Body'
                    value={formValues.Body}
                    onChange={(e) => handleChange(e)}
                />    
            </div>

            <div className='flex items-center'>   
                <label className='text-secondary_lblue order-2 text-start ml-10' htmlFor='updated'> Stay up-to-date with company announcements and updates to our API</label>
                <input
                    type='checkbox'
                    id='updated'
                    
                />
            </div>
         
           
        
            <button onClick={(e) => submitForm(e)} className='border mt-10 border-secondary_blue px-6 py-4 hover:bg-secondary_blue hover:text-white rounded-full w-1/6'>Submit</button>
        </form>
    
    </div>

  )
}

export default Contact