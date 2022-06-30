import React from 'react'
import axios from 'axios'
import Repo from '../components/Repo'

const trending = ({data}) => {
  return (
    <div>
        <div className='flex flex-col items-center  text-sm font-semibold text-purple-700'>
        <h1 className='text-center uppercase text-2xl font-bold text-gray-600 tracking-wider'>
            Trending
            <span className=' font-normal text-sm bg-purple-700 p-2 text-white ml-3 rounded-full h-2 w-2'>
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
        <div className='mx-auto '>
       <a href="http://github.com" className='text-gray-600 ' target="_blank" rel="noopener noreferrer">Source : Github</a>
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