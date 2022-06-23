import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const CommentForm = ({setcommentList,commentList}) => {
  const router = useRouter()
  const [comment, setComment] = useState('')
  const handleChange=(e)=>{
    setComment(e.target.value)

  }

  const get_current_user=()=>{
    if(!localStorage.getItem('token')){
      return null
    }
    const res=JSON.parse(localStorage.getItem('user'))
    return res


  }
  const handlesubmit=async (e)=>{
    e.preventDefault()

    
    
    const current_user=get_current_user()
    if(!current_user)
    {
      toast.warning('You must be logged in to comment')
      return
    }
    if(comment.length<3)
    {
      toast.warning('Comment must be atleast 3 characters long')
      return
    }
    const newComment={
      comment,
      user:current_user.name,
      created_at:new Date().toLocaleString()
    }
    try {
      setcommentList([newComment,...commentList])
      setComment('')
      const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/comment/create/${router.query.id}`,{comment},{headers:{'x-access-token':localStorage.getItem('token')}})
      console.log(res.data)
      await toast.success('Comment added successfully')
  
    } catch (error) {
      toast.error('Error adding comment')
    }
   
  }

  return (
    <div>
<form onSubmit={handlesubmit}>
<div className="mb-4 w-full bg-gray-50 rounded-lg border   ">
<div className="py-2 px-4 bg-white rounded-t-lg ">
<label htmlFor="comment" className="sr-only">Your comment</label>
<textarea onChange={handleChange}  value={comment} id="comment" rows="4" className="px-0 w-full text-sm text-gray-900 bg-white border-0 focus:border-gray-400 focus:outline-none  " placeholder="Write a comment..." required="" name='comment'></textarea>
</div>
<div className="flex justify-between items-center py-2 px-3 border-t ">
<button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200  hover:bg-purple-800">
Post comment
</button>
<div className="flex pl-0 space-x-1 sm:pl-2">

</div>
</div>
</div>
</form>

</div>
  )
}

export default CommentForm