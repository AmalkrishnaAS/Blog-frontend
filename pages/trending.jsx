import React from 'react'
import axios from 'axios'
import Repo from '../components/Repo'

const trending = ({data}) => {
  return (
    <div>
        <div className='flex flex-col items-center  text-sm font-semibold text-purple-700'>
        <h1 className='text-center uppercase text-2xl font-bold text-gray-600 tracking-wider flex items-center'>
            Trending
            <span className=' font-normal text-sm bg-purple-700 p-2 text-white ml-3 rounded-full h-8 w10 flex items-center justify-center'>
                    {data.length}
                </span>
            
           
        </h1>
        
        </div>
       
        <div className='max-w-screen ml-3  p-6    max-w-screen flex flex-wrap gap-3 justify-center'>
        {
            data.map((item,id)=>{
                return(
                    <Repo item={item}></Repo>

                )
            })
        }
        </div>
       
    </div>
  )
}
export async function getServerSideProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/repos`)
    
    return {
        props: {
            data: res.data
           
        }
    }
}


export default trending