import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Herobanner = () => {
    return (
        <>
        <div className='mt-10'>           
            <div className='border-solid outline-double flex outline-zinc-900 w-full'>
            <div>
                <Image src="/avatar.png" width={500} height={500}/>
            </div>
            <div className='flex flex-col mt-20'>
                <p className='text-zinc-700 text-lg'>Hello folks!</p>
                <p className='text-white text-6xl mt-5'>I'm Rakshitha Patel</p>
                <p className='text-zinc-800 text-3xl mt-2' >Engineering Web and beyond.</p>
                <div className='mt-5 flex gap-5'>
                <Button variant="outline" className="bg-black text-white hover:bg-white">Download CV</Button>
                <div className='w-full flex gap-2'>
                    <Image src="/github.png" width={40} height={30} className=''/>
                    <Image src="/linkedin.png" width={40} height={30} className=''/>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Herobanner