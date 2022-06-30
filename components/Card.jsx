import React from 'react'
import moment from 'moment'
import {CalendarIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { ClockIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

const Card = ({item}) => {

  const [message, setMessage] = useState('')


  useEffect(() => {

    //get time delta and set messages to display based on the number of days as today,yesterday few days ago, or a date
   const delta=moment(item.updated_at).fromNow()
   setMessage(delta)
    
    

  }, [])
  


 

  return (
 <motion.div className="max-w-sm rounded-lg shadow-lg overflow-hidden"
  
 >
          <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-sm max-w-[90vw]  rounded-lg overflow-hidden">
            <motion.img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.thumbnail?item.thumbnail:"/logo-purple.webp"} alt="blog" whileHover={{
              scale: 1.1,
              x: -5,
              y: -5,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }} whileTap={{
              scale: 1.05,
              x: 5,
              y: 5,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }
            
          }
             />
            <div className="p-6">
            
              <h1 className="title-font text-lg font-medium text-gray-900 mb-1">{item.title}</h1>
              <h2 className=" p-1 text-xs title-font font-medium text-gray-700 mb-3 capitalise flex ">
                <UserIcon className='mr-2 h-4 '></UserIcon>
                {item.Author}</h2>
             
              <div className="flex items-center flex-wrap ">
              <Link href={`blog/${item.id}`}><div class="relative after:absolute after:bg-purple-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 text-sm text-purple-500 cursor-pointer">Hover over me &rarr;</div></Link>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200 tetx-lg">
                <ClockIcon className='h-4 w-4  mr-2' />{message}
                </span>
               
              </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Card