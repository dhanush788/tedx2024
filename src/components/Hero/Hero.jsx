"use client"
import React from 'react';
import './Hero.css';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[100vh]'>
      <div className="marq-ticket border border-black p-2 md:rounded-15 relative min-w-max md:mx-[8%]">
        <Marquee />
        <button className='absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button>
      </div>
      <div className='relative mt-10 px-[8%]'>
        <div className='absolute top-0 flex border-black bg-white border-2 py-3 md:py-5 px-3 md:px-9 rounded-[6px] md:rounded-[15px] font-avenue text-base md:text-3xl mr-auto !z-50'>UPCOMING EVENT</div>
        <div className='w-full overflow-hidden flex-1 h-[75vh] rounded-15'>
          
          <svg width="0"  height="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="svgTextPath">
                <path d="M18.7684 101C9.13009 101 0 109.192 0 118.83V700C0 700 0 700 0 700H2000C2000 700 2000 700 2000 450V0C1196 0 1189.28 0 1181 0H359C350.716 0 344 6.71573 344 15V71C344 85.1421 344 92.2132 339.607 96.6066C335.213 101 328.142 101 314 101H19C18.9226 101 18.8454 101 18.7684 101Z" />
              </clipPath>
            </defs>
          </svg>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            style={{
              position: "relative",
              clipPath: "url(#svgTextPath)",
            }}
            className='w-full h-full md:h-auto object-cover'
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
