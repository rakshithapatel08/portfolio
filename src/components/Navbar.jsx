import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between w-full pt-5 pb-5 items-center'>    
        <ul className='flex w-1/4 justify-between text-white items-center'>
          <Link href="/"><Button variant="link"><li className='pl-4 pr-4 text-white text-2xl'>RP.</li></Button></Link>
          <Link href="#about"><Button variant="link" className="text-white pl-10"><li>About</li></Button></Link>
          <Link href="#projects"><Button variant="link" className="text-white"><li>Projects</li></Button></Link>
          <Link href="#works"><Button variant="link" className="text-white"><li>Works</li></Button></Link>
        </ul>      
        <Link href="#contact"><Button variant="outline" className="bg-black text-white hover:bg-white">Contact Me</Button></Link>      
    </div>
    </>
  )
}

export default Navbar