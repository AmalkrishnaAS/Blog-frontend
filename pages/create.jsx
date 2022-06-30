import { useState } from "react";
import dynamic from 'next/dynamic';
import axios from "axios";
import Router from "next/router";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../node_modules/react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";

function App({setprogress}) {
    const [value, setValue] = useState('')
    const[formdata,setFormdata]=useState({
        title:'',
        content:'',
        thumbnail:null
    })
    const [publish, setPublish] = useState(false)
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
            
        })

    }
    
    const handleSubmit = async (e) => {
      

        e.preventDefault();
        setprogress(20);
        const data={
            title:formdata.title,
            content:value,
            thumbnail:formdata.thumbnail,
            publish:publish
      
            
        }
      
        try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/blog/create`, data, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        },
        "credentials": "include",
        "mode": "cors"
      

      })
      toast.success('Blog created successfully')
      setprogress(100);
        Router.push('/dashboard')
    } catch (error) {
        toast.error('Something went wrong')
        setprogress(0);
    }
    

     
       
     
  }

    return(
        <div className="max-w-[800px] mx-auto flex flex-col justify-center items-center px-6">
      <form className=" mx-auto max-w-[300px] sm:max-w-[800px] " onSubmit={handleSubmit}>
      

<div className="mb-6">
    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
    <input type="text" id="base-input" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-purple-500 block w-full p-2.5 " onChange={handleChange} required />
</div>
<div className="mb-6">
    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 ">Thumbnail URL</label>
    <input type="text" name="thumbnail" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-purple-500 block w-full p-2.5 " onChange={handleChange} />
</div>
<div className="mb-3">
    <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 ">Content</label>
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
    <div className="flex items-center justify-between mb-6">
      
<label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
<input type="checkbox" value={publish} checked={publish}  id="default-toggle" className="sr-only peer" onClick={()=>setPublish(!publish)} />
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
<span className="ml-3 text-sm font-medium text-gray-900 ">Publish</span>
</label>
</div>

   
    
    
    <div className="">
    <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
    
</div>


</form>
        </div>  

    )
}

export default App;