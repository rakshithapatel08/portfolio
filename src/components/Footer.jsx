import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full h-48 bg-white mt-5 pt-5 pb-5 shadow-md shadow-white'>
        <div className='flex justify-between ml-40 mr-40'>
            <div>
            <p className='pl-4 pr-4 pt-1 text-black text-lg'>RP.</p>
            <p className='pl-4 pr-4 pt-2 text-zinc-700 text-2xl'>Rakshitha Patel</p>
            <p className='pl-4 pr-4 text-zinc-800 text-md'>Web developer | MERN | Software Dev</p>
            <Link href=""><div className='flex gap-2 pl-4 pr-4 items-start justify-center mt-2'><Image src="/email.png" width={20} height={20}/><span className='text-black'>rakshithapatel0807@gmail.com</span></div></Link>
            </div>
            <div className='flex flex-col items-start'>
            <Link href="www.linkedin.com/in/rakshitha-patel-41554523b"><div className='flex gap-2 mb-1 items-center justify-center'><Image src="/linkedinDark.png" width={30} height={30}/><span className='text-black'>/rakshitha-patel-41554523b</span></div></Link>
                <Link href="https://github.com/rakshithapatel08"><div className='flex gap-2 mb-1 items-center justify-center'><Image src="/githubDark.png" width={30} height={30}/><span className='text-black'>/rakshithapatel08</span></div></Link>
                <Link href=""><div className='flex gap-2 mb-1 items-center justify-center'><Image src="/web.png" width={30} height={30}/><span className='text-black'>/rakshithapatel08-vercel.app</span></div></Link>
                <Link href="https://x.com/_rakshitha_08"><div className='flex gap-2 mb-1 items-center justify-center'><Image src="/twitter.png" width={30} height={30}/><span className='text-black'>/_rakshitha_08</span></div></Link>
                <Link href="https://www.instagram.com/_rakshitha_patel_08_/"><div className='flex gap-2 mb-1 items-center justify-center'><Image src="/instagram.png" width={30} height={30}/><span className='text-black'>/_rakshitha_patel_08_</span></div></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer