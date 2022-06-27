import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Table from '../components/Table'
import Link from 'next/dist/client/link'
import Modal from '../components/Modal'
import { toast } from 'react-toastify'



const dashbord = (props) => {
  const [blogs, setBlogs] = useState([])
  const [deleteId, setDeleteId] = useState('')
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/blog/all_by_user`, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
      
      console.log(res.data)
      setBlogs(res.data)
      setloading(false)
      return null
    } catch (error) {
     setError(error)
     console.log(error)
     setloading(false)
     return
      
    }

   

  }
    const router = useRouter()
    useEffect( () => {
        if (!localStorage.getItem('token')) 
        {
            router.push('/login')
        }
        console.log(error)
         fetchData()
         if(error)
         { toast.error("Error fetching your blogs 😢 Try logging in again")
        }
        
         console.log(blogs)
      

      


    }, [])
  return (
    <div className='min-h-[80vh] max-w-screen'>
      
      <Modal deleteId={deleteId} setDeleteId={setDeleteId} setprogress={props.setprogress} setBlogs={setBlogs} blogs={blogs} />
    

      {
        loading&&<div className=' sticky top-10 flex justify-center '><svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        </div>
      }

     
      
      
      {blogs.length!==0?<div>
      <div className='flex justify-center items-center text-gray-500 text-sm font-semibold'>
        <h1 className='text-3xl uppercase mt-6'>Dashboard</h1>
      </div>

      
      <div className='flex justify-center items-center text-purple-700 text-sm font-semibold'>
        <h1 className='text-lg'>Total Blogs: {blogs.length}</h1>
      </div>


      
       
      <div className="flex justify-end">
      <button className="mr-4 mb-3 sm:mr-[10vw] sm:  bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={()=>router.push('/create')}>
          Create +
          </button>
      </div>
      <Table blogs={blogs} setBlogs={setBlogs} setprogress={
        props.setprogress
      }
      deleteId={deleteId} setDeleteId={setDeleteId}  /> 
    
      </div>:
      <div className=' text-gray-500 text-sm font-semibold'>
        <h1 className='text-3xl uppercase text-center mt-4'>Dashboard</h1>
        <div className='h-[80vh] flex justify-center items-center'>
        <div className='flex flex-col gap-6'><img src="/nothing.svg" className='h-52' alt="" />
        <button className="   bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={()=>router.push('/create')}>
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

