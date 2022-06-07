import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const login = () => {
  const router = useRouter()
    const [formdata, setformdata] = useState({
        email: '',
        password: '',
        cpassword: ''

    })
    const [data, setData] = useState(null)

    const handlesubmit = async (e) => {
        e.preventDefault()

        if(formdata.password!==formdata.cpassword){
            alert('Password not match')
            return
        }


       
        try {
          console.log(formdata)
          const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/user/register`, {...formdata,avatar:null})
          console.log(res.data)
          router.push('/login')
  
        } catch (error) {
          alert(error.response.data.message)
          
        }
       

        //signup
      


        
     
        // console.log(token)
        // router.push('/dashboard')
        
        
        
    

    

        // console.log(formdata)
     
    }

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }



    
  return (
    <form class="text-gray-600 body-font" onSubmit={handlesubmit}>
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <img className='w-1/2 h-1/2 m-auto' src="/login.svg" alt="" />
       <h3 className='text-2xl uppercase text-center mt-4'>Join us !!</h3>
        <div className='flex justify-center items-center text-gray-500 text-sm font-semibold'>
          <h1 className='text-lg'>Create an Accont</h1>
          </div>
      </div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5"></h2>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email </label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div class="relative mb-4">
          <label for="cpassword" class="leading-7 text-sm text-gray-600"> Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <label for ='submit' >
        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <input type="submit" className='hidden' />
        </label>
        <p class="text-xs text-gray-500 mt-3">Your Data is completely private.</p>
      </div>
    </div>
  </form>
  )
}

export default login