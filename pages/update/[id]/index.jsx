import { useState } from "react";
import dynamic from 'next/dynamic';
import axios from "axios";
import Router from "next/router";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../../node_modules/react-quill/dist/quill.snow.css";
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import { toast } from "react-toastify";
function App({data}) {

    useEffect(() => {
     
        let currentuser = localStorage.getItem('user')
        currentuser=JSON.parse(currentuser)
        if(currentuser.id !== data.user_id){
            Router.push('/')
        }
        
    
     
      
    }, [])
    

    const router=useRouter()
    const [value, setValue] = useState(data.content)
    const [publish, setPublish] = useState(data.publish)
    const[formdata,setFormdata]=useState({
        title:data.title,
        content:'',
        thumbnail:data.thumbnail,
        
    })
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
            
        })

    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        const data={
            title:formdata.title,
            content:value,
            thumbnail:formdata.thumbnail,
            publish:publish
      
            
        }
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND}/blog/update/${router.query.id}`, data, {
                headers: {
                  'x-access-token': localStorage.getItem('token')
                },
                "credentials": "include",
                "mode": "cors"
              
        
              })
              toast.success('Blog updated successfully')
            
              Router.push('/dashboard')
            
        } catch (error) {
         toast.error('Error updating blog')
            
        }
       
       
     
  }
  useEffect(()=>{
      if(localStorage.getItem('token')===null){
            Router.push('/login')
        }
    },[])

    return(
      <form className="max-w-[400px] sm:max-w-[800px] flex flex-col m-auto" onSubmit={handleSubmit}>
      

<div class="mb-6">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
    <input value={formdata.title} type="text" id="base-input" name="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-purple-500 block w-full p-2.5 " onChange={handleChange} required />
</div>
<div class="mb-6">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">Thumbnail URL</label>
    <input value={formdata.thumbnail} type="text" name="thumbnail" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-purple-500 block w-full p-2.5 " onChange={handleChange} />
</div>
<div class="mb-3">
    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 ">Content</label>
    <div className="quill ">
    <ReactQuill value={value} onChange={setValue} className='h-full'
     modules={
        {

          toolbar: [
            
            
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{header: 1}, {header: 2}],
            //font sans
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            [{script: 'sub'}, {script: 'super'}],
            [{indent: '-1'}, {indent: '+1'}],
            
            [{header: [ 3, 4, 5, 6,false]}],
            [{font: []}],


            

           
            [ 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'align': 'center' },{ 'align': 'right' },{ 'align': 'justify' }],
            ['link','video','image'],
          

            
            
            
          ],
         
        }
      }
      placeholder="Write your blog here..."
    
     />

    </div>
    </div>
    <div class="flex items-center justify-between mb-6">
      
      <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" value={publish} checked={publish}  id="default-toggle" class="sr-only peer" onClick={()=>setPublish(!publish)} />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-purple-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 ">Publish</span>
      </label>
      </div>
    <div class="">
    <button type="submit" class="text-white bg-purple-700 hover:bg-purple-800  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</div>


</form>

    )
}

export default App;

export const getServerSideProps = async (ctx) => {

    //test

    const res=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/blog/${ctx.query.id}`,{
        "credentials": "include",
        "mode": "cors"
    })
    //check
    console.log(res.data)
    return {
        props: {
            data: res.data
        }
    }
}