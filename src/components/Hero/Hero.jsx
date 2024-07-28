"use client"
import React, { useEffect } from 'react';
import './Hero.css';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';


const Hero = () => {


  return (
    <div className='h-[100vh] '>
      <div className="marq-ticket border border-black p-2 md:rounded-15 relative min-w-max md:mx-[8%]">
        <Marquee />
        <button className='absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button>
      </div>
      <div className='relative mt-10 px-[8%]'>
        <div className='absolute top-0 flex border-black bg-white border-2 py-5 px-9 rounded-[15px] font-avenue md:text-3xl mr-auto !z-50'>UPCOMING EVENT</div>
        <div className='w-full overflow-hidden flex-1 h-[75vh] cut'>
          {/* <Image src='/hero.png' alt='hero' width={100} height={100} className='w-full h-auto object-cover' /> */}
          <video
            id="background-video"
            loop
            autoPlay
            muted
            style={{
              position: "relative",
            }}
            className='w-full h-auto object-cover'
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    </div>
  )
}

export default Hero;
