"use client"
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorksArray from "../../utils/works.json"
import Timeline from './Timeline';

const Works = () => {
    return (
        <div id='works'>
            <p className='w-full text-center text-zinc-800 font-bold text-3xl mb-5'>Beyond projects: some <span className='text-white'>experience.</span></p>
            <VerticalTimeline layout="1-column-left" lineColor='#fff'>
                {WorksArray.map((w) => {
                    return (
                        <Timeline w={w} id={w.id}/>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Works