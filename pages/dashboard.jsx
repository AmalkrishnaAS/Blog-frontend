import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Table from '../components/Table'
import Link from 'next/dist/client/link'



const dashbord = (props) => {
  const [blogs, setBlogs] = useState([])

  const fetchData = async () => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/blog/all_by_user`, {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    
    console.log(res.data)
    setBlogs(res.data)

  }
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token')) 
        {
            router.push('/login')
        }
        fetchData()
        console.log(blogs)

      


    }, [])
  return (
    <div className='min-h-[80vh]'>
     
     
      
      
      {blogs.length!==0?<div>
      <div className='flex justify-center items-center text-gray-500 text-sm font-semibold'>
        <h1 className='text-3xl uppercase'>Dashboard</h1>
      </div>

      
      <div className='flex justify-center items-center text-purple-500 text-sm font-semibold'>
        <h1 className='text-lg'>Total Blogs: {blogs.length}</h1>
      </div>


      
       
      <div className="flex justify-end">
      <button className="mr-4 mb-3 sm:mr-[10vw] sm:  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>router.push('/create')}>
          Create +
          </button>
      </div>
      <Table blogs={blogs} setBlogs={setBlogs} />
      </div>:
      <div className=' text-gray-500 text-sm font-semibold'>
        <h1 className='text-3xl uppercase text-center mt-4'>Dashboard</h1>
        <div className='h-[80vh] flex justify-center items-center'>
        <div className='flex flex-col gap-6'><img src="/nothing.svg" className='h-52' alt="" />
        <button className="   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>router.push('/create')}>
          Create +
        </button>
       
        </div>
        


        </div>
        </div>
        }
      </div>
      
  )
}

export default dashbord

