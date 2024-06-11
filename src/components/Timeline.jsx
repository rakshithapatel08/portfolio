"use client"

import Image from 'next/image';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from "react-vertical-timeline-component"
const Timeline = ({w}) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref} key={w.id} className='mt-10'>
            <VerticalTimelineElement
                contentStyle={{ background: "linear-gradient(to top right,rgb(39,39,42),rgb(63,63,70))", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(161,161,170)' }}
                date={w.timeline}
                iconStyle={{ background: 'rgb(161,161,170)', color: '#fff' }}
                icon={<div className='flex justify-center items-center'><Image src={w.img} width={30} height={30} /></div>}
                visible={inView}

            >
                <h3>{w.role}</h3>
                <h4>{w.place}</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default Timeline