import React from 'react'
import moment from 'moment'
const CommentTable = ({commentList}) => {
  return (
    <table >
                <tbody>
               {
                 commentList.map(comment => (
                  <tr className='border-y-[1px] '>
                  <td>
                  <div class="bg-white rounded-lg shadow-lg p-4">
                  <div class="flex items-center justify-between">
                  <div class="flex items-center">
                <div className="h-10 rounded-full bg-purple-800 w-10 mr-4 flex items-center justify-center text-white">
                  {comment.user[0].toUpperCase()}

                </div>
                  <div class="text-sm">
                  <div class="text-gray-900 leading-none">
                  <span class="font-bold capitalize">{comment.user}</span>
                  <span class="text-gray-600"> {'@'+comment.user}</span>
                  </div>
                  <div class="text-gray-600">
                  <span class="text-gray-600">{moment(comment.created_at).fromNow()}</span>
                  </div>
                  </div>
                  </div>
                  <div class="-mt-4 flex items-center">
                
                 
                  </div>
                  </div>
                  <div class="flex-1 px-4 py-2 text-gray-700">
                  <div>
                  {comment.comment}
  
                  </div>
                  </div>
                  </div>
                  </td>
                 
                  </tr>
                  
                  ))

               }
                </tbody>

                </table>
  )
}

export default CommentTable