import React from 'react'
import ProjectsArray from "../../utils/projects.json"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
   <div className='w-full mt-16 mb-20' id="projects">
    <p className='w-full text-center text-zinc-800 font-bold text-3xl mb-5'>A collection of my best <span className='text-white'>projects.</span></p>
    <div className='flex justify-center ml-20 mr-20 flex-wrap gap-20'>
    {ProjectsArray.map((details)=><ProjectCard details={details} key={details.number}/>)}
</div>
   </div>
  )
}

export default Projects