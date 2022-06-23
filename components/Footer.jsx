import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
<footer className=" mt-6 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
<span className="text-sm text-gray-500 text-center ">© 2022 <a  className="hover:underline">HelloCoder™</a>. All Rights Reserved.
</span>
<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
<li>
<Link href={'/'}><a  className="mr-4 hover:underline md:mr-6 ">Home</a></Link>
</li>
<li>
<Link href={'/login'}><a  className="mr-4 hover:underline md:mr-6 ">Sign Up</a></Link>
</li>
<li>
<Link href={'/'}><a  className="mr-4 hover:underline md:mr-6 ">Login</a></Link>
</li>
<li>
<a  className="mr-4 hover:underline md:mr-6 " href='https://github.com/AmalkrishnaAS/Blog-frontend' target={'_blank'}>Contribute</a>
</li>

</ul>
</footer>

  )
}

export default Footer