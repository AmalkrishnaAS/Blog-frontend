
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import Card from '../components/Card'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
const Home = (props) => {

  
  const [data, setData] = useState(props.data);


  


  return (
    <div className='min-h-[69vh] max-w-screen flex '>
      {data.filter((item)=>item.publish===true).length?<section className="text-gray-600 body-font w-screen flex gap-3 flex-wrap m-3 flex items-center justify-center">
      {
        data.filter((data)=>data.publish===true).map((item) => {
          return (
            <Card key={item.id} item={item} />
          )
        })
      }

    
  </section>:
  <div className="h-[50vh] w-screen flex items-center justify-center flex-col gap-4 min-h-full">
    <div className="text-center">
      <Image src="/nothing.svg" width={200} height={200} />
    </div>
    <div className="text-center">
      <h1 className="text-gray-600 text-3xl font-medium">Be The first to contribute....</h1>
      <Link href='/login'>
        <a className='mt-3 font-3xl text-purple-600 hover:underline trsnsition duration-150'>
          Login to contribute &rarr;
        </a>
        </Link>
    </div>
    

  
    
    </div>}
  </div>

  )
}

export default Home



export async function getServerSideProps() {

const  url=`${process.env.NEXT_PUBLIC_BACKEND}/blog/all`
const res = await axios.get(url)
const data = res.data
return {
  props: {
   data: data.reverse()
  }
}
}
