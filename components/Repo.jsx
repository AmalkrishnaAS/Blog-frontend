import React from 'react'
import { isTemplateExpression } from 'typescript'

const Repo = ({item}) => {

    //fuction to limit the length of the description'
    const limit = (str, limit) => {
        if (str.length > limit) {
            return str.substring(0, limit) + '...'
        } else {
            return str
        }
    }
  return (
    <div className="">
        
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md min-w-[400px] min-h-[250px] ">
    <a href={item.link} target='_blank' className=''>
        <h5 class="mb-2 text-2xl min-h-[50px] hover:text-purple-800 duration-200 hover:scale-105 tracking-tight text-gray-900 font-medium" >{item.title}</h5>
    </a>
    
    <p className='text-sm text-purple-700 font-bold mb-2 '>
        {item.language}
    </p>
    <p class="mb-3 font-normal min-h-[50px]  ">{limit(item.description,70)}</p>
    <a href={item.link} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 ">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>


    </div>
  )
}

export default Repo