"use client"
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
  const textRefs = useRef([]);
  const [isEvent, setIsEvent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsEvent(!isEvent);
    }, 1000);
  });

  useEffect(() => {
    textRefs.current.forEach((textRef, index) => {
      if (textRef) {
        gsap.fromTo(
          textRef,
          { opacity: 1, yPercent: 0 },
          {
            opacity: 1,
            yPercent: -4 - ((index + 1)*3),
            duration: 1,
            scrollTrigger: {
              trigger: textRef,
              start: 'top 80%', 
              end: 'top 0%',
              scrub: true,
            },
            ease: 'power4.out',
          }
        );
      }
    });

    return () => {
      textRefs.current.forEach((textRef) => {
        if (textRef) {
          ScrollTrigger.getById(textRef)?.kill();
        }
      });
    }
  }, []);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const videoElement = document.getElementById("background-video");

    if (isSafari) {
      videoElement.style.clipPath = "none";
      videoElement.style.mask = "url(#svgTextPath)";
    } else {
      videoElement.style.mask = "none";
      videoElement.style.clipPath = "url(#svgTextPath)";
    }
  }, []);

  return (
    <div className='h-auto'>
      <div className="md:mx-[8%] marq-ticket border border-black py-2 md:rounded-15 relative min-w-max bg-white mt-10">
					<Marquee />
			</div>
      <div className='relative mt-4 px-[4%] md:px-[8%]'>
        <a href='/ticket' className={`absolute top-0 flex border-black border ${isEvent ? 'bg-white px-[14px] md:px-9' : 'bg-tedRed text-white px-6 md:px-14'} py-3 md:py-6 rounded-[6px] md:rounded-[15px] font-avenue text-base md:text-3xl mr-auto !z-50 cursor-pointer `}>{isEvent ? 'UPCOMING EVENT' : 'BOOK TICKETS'}</a>
        <div className='w-full overflow-hidden flex-1 h-[70vh] rounded-15 relative'>
          <svg width="0" height="0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="svgTextPath">
                <path className='hidden md:flex' d="M18.7684 101C9.13009 101 0 109.192 0 118.83V1000C0 1000 0 1000 0 1000H2000C2000 1000 2000 1000 2000 1000V0C1196 0 1189.28 0 1181 0H359C350.716 0 344 6.71573 344 15V71C344 85.1421 344 92.2132 339.607 96.6066C335.213 101 328.142 101 314 101H19C18.9226 101 18.8454 101 18.7684 101Z" />
                <path className='flex md:hidden' d="M11.1288 63C4.98251 63 0 67.9825 0 74.1288V1174.87C0 1181.02 4.98254 1186 11.1288 1186H716.871C723.017 1186 728 1181.02 728 1174.87V11.1288C728 4.98252 723.017 0 716.871 0H183.129C176.983 0 172 4.98252 172 11.1288V31.0858C172 46.1303 172 53.6525 167.326 58.3263C162.653 63 155.13 63 140.086 63H11.1288Z" />
              </clipPath>
            </defs>
          </svg>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            playsInline
            style={{
              position: "relative",
            }}
            className='w-full h-full md:h-auto object-cover hidden md:block'
          >
            <source src="/video_main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            playsInline
            style={{
              position: "relative",
              clipPath: "url(#svgTextPath)",
            }}
            className='w-full h-full md:h-auto object-cover md:hidden block'
          >
            <source src="/video_m.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className='absolute bottom-0 left-5 font-thunder font-normal text-2xl md:text-8xl text-white p-3 hidden md:block text-stroke'>28 <br/> SEP<br/> 2024</p>
          <p className='absolute bottom-0 left-5 font-thunder font-normal text-2xl md:text-8xl text-white p-3 hidden md:block text-stroke'>28 <br/> SEP<br/> 2024</p>
          <p className='absolute bottom-0 left-5 font-thunder font-normal text-2xl md:text-8xl text-white p-3 hidden md:block text-stroke'>28 <br/> SEP<br/> 2024</p>
          <p className='absolute bottom-0 left-5 font-thunder font-normal text-2xl md:text-8xl text-white p-3 hidden md:block text-stroke'>28 <br/> SEP<br/> 2024</p>
          <p className='absolute bottom-0 left-5 font-thunder font-normal text-2xl md:text-8xl text-white p-3 hidden md:block'>28 <br/> SEP<br/> 2024</p>
          <p ref={el => (textRefs.current[0] = el)} className='absolute bottom-0 right-5 font-thunder font-normal text-5xl md:text-8xl text-white p-3 md:block uppercase text-right text-stroke'>Kaleidoscope:<br/>Alchemy of Voices</p>
          <p ref={el => (textRefs.current[1] = el)} className='absolute bottom-0 right-5 font-thunder font-normal text-5xl md:text-8xl text-white p-3 md:block uppercase text-right text-stroke'>Kaleidoscope:<br/>Alchemy of Voices</p>
          <p ref={el => (textRefs.current[2] = el)} className='absolute bottom-0 right-5 font-thunder font-normal text-5xl md:text-8xl text-white p-3 md:block uppercase text-right text-stroke'>Kaleidoscope:<br/>Alchemy of Voices</p>
          <p ref={el => (textRefs.current[3] = el)} className='absolute bottom-0 right-5 font-thunder font-normal text-5xl md:text-8xl text-white p-3 md:block uppercase text-right text-stroke'>Kaleidoscope:<br/>Alchemy of Voices</p>
          <p ref={el => (textRefs.current[4] = el)} className='absolute bottom-0 right-5 font-thunder font-normal text-5xl md:text-8xl text-white p-3 md:block uppercase text-right'>Kaleidoscope:<br/>Alchemy of Voices</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
