import React from 'react'
import Link from 'next/link'
import {PencilAltIcon} from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { toast } from 'react-toastify'
const Table = ({blogs,setBlogs,setprogress,deleteId,setDeleteId,setModal
}) => {

    //slice date to show only date
    const sliceDate = (date) => {
        return date.slice(0, 10)
    }

   
   
  return (
      //list of blogs
    <div className=' max-w-screen overflow-x-auto  '>
        <table className=" border-2 max-w-full mx-auto overflow-x-scroll">
            <thead>
                <tr>
                    <th className="px-4 py-2">Title</th>
                   
                    <th className="px-4 py-2">Created At</th>
                    <th className="px-4 py-2">Last Update</th>
                    <th className="px-4 py-2">Actions</th>
                    <th className="px-4 py-2">Status</th>
                    
                </tr>
            </thead>
            <tbody>
              {
                blogs.map(item => (
                    <tr key={item.id}>
                        <td className="border px-4 py-2 ml"><Link href={'/blog/'+item.id}><a className=''><p className='text-purple-700'>{item.title}</p></a></Link></td>
                       
                        <td className="border px-4 py-2">{sliceDate(item.created_at)}</td>
                        <td className="border px-4 py-2">{sliceDate(item.updated_at)}</td>
                        <td className="border px-4 py-2 ">
                            <div className='w-full h-full flex flex-wrap  gap-2 items-center justify-center'>
                            <Link href={'/update/'+item.id}><a className=''><PencilAltIcon className='h-6 w-6 text-gray-500 hover:text-purple-600 duration-200 '></PencilAltIcon></a></Link>
                            <button className=''><TrashIcon onClick={()=>{
                                setDeleteId(item.id)
                            }} className='h-6 w-6 text-gray-500 hover:text-purple-600 duration-200'></TrashIcon></button>
                            </div>


                          
                          
                        </td>
                        <td className="border px-4 py-2">
                            {item.publish ? <p className='text-green-700'>Published</p> : <p className='text-red-700'>Draft</p>}
                        </td>

                    </tr>
                ))
              }
            </tbody>
        </table>
    </div>



  )
}

export default Table