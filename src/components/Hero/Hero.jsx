"use client"
import React from 'react';
import './Hero.css';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-auto'>
      <div className="marq-ticket border border-black py-2 md:rounded-15 relative min-w-max md:mx-[8%] bg-white">
        <Marquee />
        <button className='absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button>
      </div>
      <div className='relative mt-10 px-[8%]'>
        <div className='absolute top-0 flex border-black border bg-white  py-3 md:py-6 px-3 md:px-9 rounded-[15px] font-avenue text-base md:text-3xl mr-auto !z-50'>UPCOMING EVENT</div>
        <div className='w-full overflow-hidden flex-1 h-[70vh] rounded-15'>
          <svg width="0"  height="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="svgTextPath">
                <path className='hidden md:flex' d="M18.7684 101C9.13009 101 0 109.192 0 118.83V1000C0 1000 0 1000 0 1000H2000C2000 1000 2000 1000 2000 1000V0C1196 0 1189.28 0 1181 0H359C350.716 0 344 6.71573 344 15V71C344 85.1421 344 92.2132 339.607 96.6066C335.213 101 328.142 101 314 101H19C18.9226 101 18.8454 101 18.7684 101Z" />
                <path className='flex md:hidden' d="M10.7817 60.5904C4.83777 60.5904 0 65.4282 0 71.3721V553.628C0 559.572 4.83778 564.41 10.7817 564.41H358.781C364.724 564.41 369.562 559.572 369.562 553.628V11.3721C369.562 5.42818 364.724 0.590377 358.781 0.590377H178.465C172.522 0.590377 167.684 5.42818 167.684 11.3721V28.8091C167.684 43.6782 167.684 51.1098 163.258 55.5355C158.833 59.9612 151.401 59.9612 136.531 59.9612H10.7817Z" />
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
