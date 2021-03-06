import React from 'react'
import { hasJSDocParameterTags, readBuilderProgram } from 'typescript'
import moment from 'moment'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import axios from 'axios'
import '../../../node_modules/react-quill/dist/quill.snow.css'
import CommentTable from '../../../components/CommentTable'
import { noSSR } from 'next/dist/shared/lib/dynamic'
import CommentForm from '../../../components/CommentForm'

const index = ({blog,comments}) => {
    const [message, setMessage] = useState('')
    const [htm, setHtm] = useState('<b>hi</b>')
    

    useEffect(() => {

      //get time delta and set messages to display based on the number of days as today,yesterday few days ago, or a date
     const delta=moment(blog.date).fromNow()
     setMessage(delta)

     
      
      
  
    }, [])
    

    const [commentList, setcommentList] = useState(comments)
      
    
    
  return (
    <div className="  w-screen  mx-auto p-5 sm:p-10 md:p-16 relative">
       
        
  <div className=" mx-auto">
  <img className='m-auto max-h-[450px] ' src={blog.thumbnail} alt="" />
    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal ml-3">
        <div className="">
              <div href="#" className="text-xs ml-3 text-indigo-600 uppercase font-medium ">
              Last Update: {moment(blog.updated_at).fromNow()}
              </div>
              <div className="text-gray-700 text-xs mt-2 ml-3"> <span href="#" className="text-indigo-600 font-medium  ease-in-out capitalize">
             
              <h1  href="#" className="text-gray-900 font-bold text-3xl mb-2 ">{blog.title}</h1>
              <h6 className='mt-2'>{blog.Author}</h6>
               
            
             
              </span></div>
               <div className='ql-snow ' ><div className='ql-editor '>{ReactHtmlParser(blog.content)}</div></div>
              

               

                
                  
                      

                    
                
              
            

               


          
            
        </div>
        </div>
    </div>
    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <h1 className='text-gray-700 uppercase mb-3 font-semibold'>{`comments (${commentList.length})`}</h1>
      <div className='flex flex-col gap-3'>
        <CommentForm setcommentList={setcommentList} commentList={commentList}>

        </CommentForm>

      <CommentTable commentList={commentList}/>
      </div>
    
    </div>


    </div>

  







  
  )
}

export default index

export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id
    const blog = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/blog/${id}`)
    const data = await blog.json()

    const comments=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/comment/all/${id}`)
    const commentData=comments.data
    

    return {
        props: {
        blog: data,
        comments: commentData.reverse()
        }
    }
    }