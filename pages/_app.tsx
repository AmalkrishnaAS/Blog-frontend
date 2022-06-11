import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useState } from 'react';
  import LoadingBar from 'react-top-loading-bar'
  import { useRouter } from 'next/router'
  import Router from 'next/router';
  import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
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
  


  //progress state
  const [progress, setProgress] = useState(0);

  //on route change start set progress to 20
  

  return (
<div className='h-screen max-w-screen overflow-x-hidden '>

   <Navbar />
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

  <Component {...pageProps} setprogress={setProgress} />
  <Footer />
  </div>)
}

export default MyApp
