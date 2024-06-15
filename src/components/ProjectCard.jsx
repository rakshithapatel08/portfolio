import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({details:{title,desc,subtitle,tech,githubRepoLink,projectLink,image,svg}}) => {
  return (
    <div className='w-2/5 h-96 shadow-2xl shadow-zinc-800'>
        <div>
            <Image src={image} width={500} height={300} className="p-6"/>
        </div>
        <div className='flex justify-between gap-6'>
            <div className='flex flex-col pl-6'>
            <p className='text-white text-2xl'>{title}</p>
            <p className='text-zinc-400 text-sm mt-2'>{subtitle}</p>
            <p className='text-zinc-600 text-md mt-4'>{desc}</p>
            </div>
            <div className='pr-6'>
            <Image src={svg} width={20} height={20} className='mb-12'/>
            <Link href={projectLink}><Image src="/link.png" width={30} height={30} className='mb-3'/></Link>
            <Link href={githubRepoLink}><Image src="/github.png" width={40} height={40} className=''/></Link>                
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
