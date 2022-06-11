import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { toast } from 'react-toastify'

const login = (props) => {
  const router = useRouter()
    const [formdata, setformdata] = useState({
        email: '',
        password: ''

    })
    const get_current_user=async ()=>{
      const token=localStorage.getItem('token')
      if(!token){
        return null
      }
      const current_user=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/user/current`,{headers:{'x-access-token':token},"credentials":true,
    "mode":"cors"})

      return current_user
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        props.setprogress(20);

        try {

          const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/user/login`, formdata)
          console.log(res.response)
  
          const token = res.data.token
          if(token){
              localStorage.setItem('token', token)
              const current_user=await get_current_user()
              localStorage.setItem('user', JSON.stringify(current_user.data))
              toast.success('Login successful')
              router.push('/dashboard')
          }
          else
          {
             toast.error('Login failed ! Invalid credentials')
          }
          props.setprogress(100);
          
        } catch (error) {
        toast.error('Something went wrong')
        props.setprogress(0);
          
        }
        

       


     
        // console.log(token)
        // router.push('/dashboard')
        
        
        
    

    

        console.log(formdata)
     
    }

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }



    
  return (
    <div class='min-h-[80vh]'>
    <form class="text-gray-600 body-font" onSubmit={handlesubmit}>
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col">
       <img className='w-1/2 h-1/2 m-auto' src="/login.svg" alt="" />
       <h3 className='text-2xl uppercase text-center mt-4'>WELCOME BACK !!</h3>
        <div className='flex justify-center items-center text-gray-500 text-sm font-semibold'>
          <h1 className='text-lg'>Login to continue</h1>
          </div>
        
      </div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5"></h2>
        <div class="relative mb-4">
          <label for="email"  class="leading-7 text-sm text-gray-600">Email </label>
          <input type="email" required id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-purple-800 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div class="relative mb-4">
          <label for="password"  class="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" required minLength={8} id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-purple-700 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <label for ='submit' >
        <button class="text-white bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 rounded text-lg">Button</button>
        <input type="submit" className='hidden' />
        </label>
        <p class="text-xs text-gray-500 mt-3">Does not have an account? <Link href='/signup'><a  className="text-purple-700 hover:underline">Create one.</a></Link></p>
      </div>
    </div>
  </form>
  </div>
  )
}

export default login