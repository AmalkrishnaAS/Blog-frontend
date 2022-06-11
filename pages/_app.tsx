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


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  //set progress on route change
  


  //progress state
  const [progress, setProgress] = useState(0);

  //on route change start set progress to 20
  Router.onRouteChangeStart = () => {
    setProgress(20);
  }

  //on route change end set progress to 100
  Router.onRouteChangeComplete = () => {
    setProgress(100);
  }


  return (
<div className='h-screen max-w-screen '>

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
