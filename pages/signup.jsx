import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import Link from 'next/dist/client/link'

const login = ({setprogress}) => {
  const router = useRouter()
    const [formdata, setformdata] = useState({
        email: '',
        password: '',
        cpassword: ''

    })
    const [data, setData] = useState(null)

    const handlesubmit = async (e) => {

        e.preventDefault()
        setprogress(20);

        if(formdata.password!==formdata.cpassword){
          toast.warning('Passwords do not match')
            setprogress(0);
            return
        }


       
        try {
         
          const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/user/register`, {...formdata,avatar:null})
          if(res.data.message){
            toast.error(res.data.message)
            await setprogress(0);
            return;
          }
         
          router.push('/login')
  
        } catch (error) {
          
          toast.error('Something went wrong')
          setprogress(0);
          
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
    <form className="text-gray-600 body-font" onSubmit={handlesubmit}>
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <img className='w-1/2 h-1/2 m-auto' src="/login.svg" alt="" />
       <h3 className='text-2xl uppercase text-center mt-4'>Join us !!</h3>
        <div className='flex justify-center items-center text-gray-500 text-sm font-semibold'>
          <h1 className='text-lg'>Create an Accont</h1>
          </div>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5"></h2>
        <div className="relative mb-4">
          <label for="email"  className="leading-7 text-sm text-gray-600">Email </label>
          <input type="email" required id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-800 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" required minLength={3} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-800 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div className="relative mb-4">
          <label for="password"  className="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" required minLength={8} id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-purple-800 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <div className="relative mb-4">
          <label for="cpassword" className="leading-7 text-sm text-gray-600"> Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" className="w-full bg-white rounded border border-gray-300 focus:border-purple-800 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlechange} />
        </div>
        <label for ='submit' >
        <button className="text-white bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Sign Up</button>
        <input type="submit" className='hidden' />
        </label>
        <p className="text-xs text-gray-500 mt-3">Already have an Account?
          <Link href="/login">
            <a className='text-purple-700'> Login</a>
          </Link>
          
        </p>
      </div>
    </div>
  </form>
  )
}

export default login