import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

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
    //get current user from api call using token
    const current_user=get_current_user()
    if(!current_user)
    {
      alert('please login')
      return
    }
    const newComment={
      comment,
      user:current_user.name,
      created_at:new Date().toLocaleString()
    }
    setcommentList([newComment,...commentList])
    setComment('')
    const res=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/comment/create/${router.query.id}`,{comment},{headers:{'x-access-token':localStorage.getItem('token')}})
    console.log(res.data)

  }

  return (
    <div>
<form onSubmit={handlesubmit}>
<div class="mb-4 w-full bg-gray-50 rounded-lg border   ">
<div class="py-2 px-4 bg-white rounded-t-lg ">
<label for="comment" class="sr-only">Your comment</label>
<textarea onChange={handleChange} value={comment} id="comment" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border-0 focus:border-gray-400 focus:outline-none  " placeholder="Write a comment..." required="" name='comment'></textarea>
</div>
<div class="flex justify-between items-center py-2 px-3 border-t ">
<button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
Post comment
</button>
<div class="flex pl-0 space-x-1 sm:pl-2">

</div>
</div>
</div>
</form>
<p class="ml-auto text-xs text-gray-500 ">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
</div>
  )
}

export default CommentForm