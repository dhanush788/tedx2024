"use client"
import React from 'react';
import './Hero.css';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-auto'>
      <div className="marq-ticket border border-black py-2 md:rounded-15 relative min-w-max md:mx-[8%]">
        <Marquee />
        <button className='absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button>
      </div>
      <div className='relative mt-10 px-[8%]'>
        <div className='absolute top-0 flex border-black bg-white border-2 py-3 md:py-5 px-3 md:px-9 rounded-[6px] md:rounded-[15px] font-avenue text-base md:text-3xl mr-auto !z-50'>UPCOMING EVENT</div>
        <div className='w-full overflow-hidden flex-1 h-[85vh] rounded-15'>
          <svg width="0"  height="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="svgTextPath">
                <path className='hidden md:flex' d="M18.7684 101C9.13009 101 0 109.192 0 118.83V1000C0 1000 0 1000 0 1000H2000C2000 1000 2000 1000 2000 1000V0C1196 0 1189.28 0 1181 0H359C350.716 0 344 6.71573 344 15V71C344 85.1421 344 92.2132 339.607 96.6066C335.213 101 328.142 101 314 101H19C18.9226 101 18.8454 101 18.7684 101Z" />
                <path className='flex md:hidden' d="M11.1288 60.5904C4.98252 60.5904 0 65.5729 0 71.7192V1000C0 1000 4.98253 1000 11.1288 1000H1000C1000 1000 1000 1000 1000 553.871V11.1288C1000 4.98252 1000 0 1000 0H156.304C150.158 0 145.176 4.98252 145.176 11.1288V28.6762C145.176 43.7207 145.176 51.2429 140.502 55.9167C135.828 60.5904 128.306 60.5904 113.261 60.5904H11.1288Z" />
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
