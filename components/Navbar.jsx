import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



import { useEffect,useState } from 'react'

const Navbar = () => {
//isopen
const [isOpen, setisOpen] = useState(false)
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
  
<nav class="bg-white mb-9 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
<div class="container flex flex-wrap justify-between items-center mx-auto">
<a href="https://flowbite.com" class="flex items-center">
{/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="HelloCoder Logo" /> */}
<span class="self-center text-xl font-semibold whitespace-nowrap">HelloCoder</span>
</a>
<div class="flex md:order-2">
{token&&<button onClick={()=>router.push('/login')} type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Login</button>}
<button onClick={()=>setisOpen(!isOpen)} data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-4" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>
<div class={`${isOpen?'':'hidden'} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-4">
<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<Link href='/'><a href="/" class={`block py-2 pr-4 pl-3  ${router.pathname==='/'?'bg-purple-700 text-white':'bg-transparent'} rounded md:bg-transparent  ${router.pathname==='/'?'md:text-purple-700':''} `} aria-current="page">Home</a></Link>
</li>
<li>
<Link href='/signup'><a href="/" class={`block py-2 pr-4 pl-3  ${router.pathname==='/signup'?'bg-purple-700 text-white':'bg-transparent'} rounded md:bg-transparent  ${router.pathname==='/signup'?'md:text-purple-700':''} `} aria-current="page">Sign Up</a></Link>
</li>
<li>
<Link href='/dashboard'><a href="/" class={`block py-2 pr-4 pl-3  ${router.pathname==='/dashboard'?'bg-purple-700 text-white':'bg-transparent'} rounded md:bg-transparent  ${router.pathname==='/dashboard'?'md:text-purple-700':''} `} aria-current="page">Dashboard</a></Link>
</li>


</ul>
</div>
</div>
</nav>


    )
}

export default Navbar