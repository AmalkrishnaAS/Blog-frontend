import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


import { useEffect,useState } from 'react'

const Navbar = () => {
  const [token, setToken] = useState(null)

 useEffect(() => {
    if(typeof window !== 'undefined'){
      if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
      }
    }
  }, [typeof window!=='undefined'?localStorage.getItem('token'):null])


  
    const router = useRouter()
  return (
    <header class="text-gray-600 body-font flex justify-center  max-w-screen">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="/logo.png" className='h-12 w-12' alt="" />
      <span class="ml-3 text-xl">HelloCoder</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'}><a class="mr-5 hover:text-gray-900">Home</a></Link>
      <Link href={'/dashboard'}><a class="mr-5 hover:text-gray-900">Dashboard</a></Link>
      <Link href={'/signup'}><a class="mr-5 hover:text-gray-900">Create Account</a></Link>
      
    </nav>
   {!token? <button onClick={()=>{
     router.push('/login')
   }} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>:
    <button onClick={()=>{
      localStorage.removeItem('token')
      setToken(null)
      localStorage.removeItem('user')
      router.push('/login')
    }} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>}
    
  </div>
</header>

    )
}

export default Navbar