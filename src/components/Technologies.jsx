"use client"
import React from 'react'
import { useInView } from 'react-intersection-observer';
import techs from "../../utils/techs.json"
import Image from 'next/image';

const Technologies = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // const techscopy = techs
  // const reversedArray = techscopy.reverse()

  return (
    <div className='w-full h-96 mb-16 flex flex-col justify-center items-center'>
      <p className='w-full text-center text-zinc-800 font-bold text-3xl mb-12'>What do I use: <span className='text-white'>technologies.</span></p>
      <div className='flex w-3/4 justify-center items-center h-80'>
        <div className='w-4/5 bg-white h-80'>
          <div className='text-black pl-16 flex flex-col justify-center h-80 w-full'>
            <p className='text-2xl'>You don't</p>
            <p className='text-4xl'>need to</p>
            <p className='text-6xl'>reinvent</p>
            <p className='text-2xl'>the <span className='text-6xl'>TECH.</span></p>
          </div>
        </div>
        <div className='w-2/5 bg-black h-80 border-white border-dotted border-2'>
        <div className='h-80 w-full flex justify-center'>
          <div>
{techs.map((t)=>{
  return(
    <div className='p-1 w-full' key={t.id}><Image src={t.url} width={60} height={60}/></div>
  )
})}
</div>
<div>
{techs.map((t)=>{
  return(
    <div className='p-1 w-full' key={t.id}><Image src={t.url} width={60} height={60}/></div>
  )
})}
</div>
<div>
{techs.map((t)=>{
  return(
    <div className='p-1 w-full' key={t.id}><Image src={t.url} width={60} height={60}/></div>
  )
})}
</div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Technologies