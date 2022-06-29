import React from 'react'
import moment from 'moment'
import {CalendarIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { ClockIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'

const Card = ({item}) => {

  const [message, setMessage] = useState('')


  useEffect(() => {

    //get time delta and set messages to display based on the number of days as today,yesterday few days ago, or a date
   const delta=moment(item.updated_at).fromNow()
   setMessage(delta)
    
    

  }, [])
  


 

  return (
 <div className="sm:max-w-[420px] md:max-w-[430px]">
          <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-sm max-w-[90vw]  rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.thumbnail?item.thumbnail:"/logo-purple.webp"} alt="blog" />
            <div className="p-6">
            
              <h1 className="title-font text-lg font-medium text-gray-900 mb-1">{item.title}</h1>
              <h2 className=" p-1 text-xs title-font font-medium text-gray-700 mb-3 capitalise flex ">
                <UserIcon className='mr-2 h-4 '></UserIcon>
                {item.Author}</h2>
             
              <div className="flex items-center flex-wrap ">
                <Link href={`/blog/${item.id}`}><a className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a></Link>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200 tetx-lg">
                <ClockIcon className='h-4 w-4  mr-2' />{message}
                </span>
               
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card