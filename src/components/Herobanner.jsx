"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { animate, motion } from "framer-motion"

const Herobanner = () => {
    const slidingvariants = {
        initial:{
            x:350
        },
        animate:{
            x:"-90%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:20
            }
        }
    }
    return (
        <>
        <div className='mt-10'>           
            <div className='border-solid outline-double flex outline-zinc-900 relative w-full h-[30rem] overflow-hidden'>
            <motion.div className='text-zinc-950 absolute text-[10rem] -bottom-10 font-bold whitespace-nowrap w-full z-10' variants={slidingvariants} initial="initial" animate="animate">
            Rakshitha Patel Web Developer
                </motion.div>
            <div className='w-2/5'>
                <Image src="/avatar.png"  className="absolute bottom-1 z-20" width={500} height={500}/>
            </div>
            <div className='flex flex-col mt-20 w-3/5'>
                <p className='text-zinc-700 text-lg'>Hello folks!</p>
                <p className='text-white text-6xl mt-5'>I'm Rakshitha Patel</p>
                <p className='text-zinc-800 text-3xl mt-2' >I Engineer Web and beyond.</p>
                <div className='mt-5 flex gap-5'>
                <Link href="https://drive.google.com/file/d/1SQMJDujDc9EMxZIklJfBURwXLw-ZTZT6/view?usp=sharing" target='_blank'><Button variant="outline" className="bg-black text-white hover:bg-white">Download CV</Button></Link>
                <div className='w-full flex gap-2'>
                    <Link href="https://github.com/rakshithapatel08" target='_blank'><Image src="/github.png" width={40} height={30} className=''/></Link>
                    <Link href="https://www.linkedin.com/in/rakshitha-patel-41554523b/" target='_blank'><Image src="/linkedin.png" width={40} height={30} className=''/></Link>
                </div>
                
                </div>
               
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Herobanner