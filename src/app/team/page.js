"use client"
import React, { useRef, useState } from 'react'


import sreerag from '../../assets/img/team/sreerag.jpg'
import archa from '../../assets/img/team/archa.jpg'
import devanand from '../../assets/img/team/devanand.jpg'
import akshay from '../../assets/img/team/akshay.jpeg'
import ivine from '../../assets/img/team/ivine.jpg'
import adil from '../../assets/img/team/adil.jpg'
import basil from '../../assets/img/team/basil.jpg'
import anna from '../../assets/img/team/anna.jpg'
import dhanush from '../../assets/img/team/dhanush.jpg'
import farhan from '../../assets/img/team/farhan.jpg'
import melbin from '../../assets/img/team/melbin.jpg'

import Image from 'next/image'
import Header from '@/components/Headers/Header'
import Footer from '@/components/Footer/Footer'


const data = [
    {
        heading: "IVINE JOJU",
        subHeading: "Organiser",
        img: ivine
    },
    {
        heading: "Akshay S Vinod",
        subHeading: "Organiser",
        img: akshay
    },
    {
        heading: "Adil",
        subHeading: "Curator",
        img: adil
    },
    {
        heading: "Archa",
        subHeading: "Treasurer",
        img: archa
    },
    {
        heading: "Basil",
        subHeading: "Outreach",
        img: basil
    },
    {
        heading: "Anna",
        subHeading: "Outreach",
        img: anna
    },
    {
        heading: "Sreerag",
        subHeading: "Media",
        img: sreerag
    },
    {
        heading: "Farhan",
        subHeading: "Production",
        img: farhan
    },
    {
        heading: "Devnandan",
        subHeading: "Production",
        img: devanand
    },
    {
        heading: "Dhanush",
        subHeading: "Technical",
        img: dhanush
    },
    {
        heading: "Melbin",
        subHeading: "Event",
        img: melbin
    }
]


const Cards = ({ item, i }) => {
    return (
        <div key={i} className={`flex flex-col min-h-[350px] md:min-h-[350px] last:mr-2`}>
            <div className='border border-black rounded-[6px] md:rounded-15 flex flex-col relative min-w-[240px] md:min-w-[300px] '>
                <div className='overflow-hidden w-full h-full rounded-[6px] md:rounded-15'>
                    <Image src={item.img} alt="" id='image' className='h-[350px] w-full object-cover ease-in-out object-top hover:scale-105 transition-all duration-300 ease' />
                </div>
                <div className={`px-4 absolute rounded-[6px] md:rounded-15 bottom-0 left-0 w-full flex flex-col transition-all duration-300 ease bg-white min-h-[75px] md:min-h-[100px]`}>
                    <p className={`font-Geist font-bold text-xl md:text-2xl pt-2 md:pt-4 uppercase`}>{item.heading}</p>
                    <p className='font-Geist text-base md:text-lg text-[#EB0028]'>{item.subHeading}</p>
                </div>
                <div className='min-h-[75px] md:min-h-[100px]'></div>
            </div>
        </div>
    )
}


const Team = () => {


    return (
        <div className='w-full flex flex-col inter' id='speakers'>
            <Header />
            <div className='flex flex-row justify-between px-[4%] md:px-[8%] py-5 mt-5'>
                <p className='font-thunder font-bold md:text-6xl text-4xl leading-snug max-w-md text-left '>MEET OUR <span className='text-[#EB0028]'>TEAM</span> </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 overflow-scroll md:overflow-hidden w-full h-full px-[4%] md:px-[8%] gap-3 md:gap-6 pb-6'>
                {data.map((item, i) => (
                    <Cards item={item} key={i} />
                ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Team