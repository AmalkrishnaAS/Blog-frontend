import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
<footer class=" mt-6 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
<span class="text-sm text-gray-500 text-center ">© 2022 <a  class="hover:underline">HelloCoder™</a>. All Rights Reserved.
</span>
<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
<li>
<Link href={'/'}><a  class="mr-4 hover:underline md:mr-6 ">Home</a></Link>
</li>
<li>
<a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
</li>
<li>
<a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
</li>
<li>
<a href="#" class="hover:underline">Contact</a>
</li>
</ul>
</footer>

  )
}

export default Footer