import React from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function Modal({deleteId, setDeleteId,  setprogress, setBlogs,blogs}) {

    const handledelete = async (id) => {
        console.log(id)
        setprogress(20);
        try {
            setBlogs(blogs.filter(blog => blog.id !== id))
            await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND}/blog/delete/${id}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            })
            setprogress(100);
            toast.success('Blog deleted successfully')
            setDeleteId(null)
            
        } catch (error) {
            toast.error('Error deleting blog')
            console.log(error)
        setprogress(0);
        setDeleteId(null)
            
        }
      
    }
  
  return (
    <>
     
    
      {deleteId? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-[80%] mx-auto"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Confirmation
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-[0.5] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setDeleteId(null)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure you want to delete this blog permanently?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setDeleteId(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-purple-700 text-white active:bg-purple-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handledelete(deleteId)}
                  >
                    Delete 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}