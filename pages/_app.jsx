import '../styles/globals.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useState } from 'react';
  import LoadingBar from 'react-top-loading-bar'
  import { useRouter } from 'next/router'
  import Router from 'next/router';
  import { useEffect } from 'react';
  import {ChevronUpIcon} from '@heroicons/react/outline'
  import {motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const [isOpen, setisOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setisOpen(false)
  }
  , [])
  const router = useRouter()


  //set progress on route change
  Router.events.on('routeChangeStart', () => {
    setProgress(20)
  }
  )
  Router.events.on('routeChangeComplete', () => {
    setProgress(100)
  }
  )
  Router.events.on('routeChangeError', () => {
    setProgress(100)
  }
  )
  const screenTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  


  //progress state
  const [progress, setProgress] = useState(0);



  //on route change start set progress to 20
  

  return (
<div className='h-screen max-w-screen  min-h-screen'>

   <Navbar setisOpen={setisOpen} />
    <LoadingBar
      progress={progress}
      height={3}

      //purple hex
      color="#9c27b0"
     
      onLoaderFinished={() => setProgress(0)}
    />
   
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}

pauseOnFocusLoss
draggable
pauseOnHover
/>

<div className='overflow-x-hidden'>
<Component  {...pageProps} setprogress={setProgress} />
</div>

  
 
 
  
    <Footer />
    <motion.div className="fixed bottom-0 right-0 mr-4 mb-4 shadow-md rounded-full" whileHover={{scale:1.1,opacity:1}} whileTap={{scale:0.9}}
    initial={{scale:1,opacity:0.5}}
    >
    
    <button onClick={screenTop} className='h-10 w-10 bg-purple-300 rounded-full shadow-lg flex justify-center items-center'>
    <ChevronUpIcon className='text-purple-500 p-2 ' />
    </button>
      
    
  </motion.div>
  
  </div>)
}

export default MyApp
