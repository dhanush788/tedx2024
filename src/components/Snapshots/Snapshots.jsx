"use client"
import React, { useEffect, useRef } from 'react'
import snapshot1 from '../../assets/img/Snapshot1.png'
import snapshot2 from '../../assets/img/Snapshot2.png'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const images = [snapshot1, snapshot2, snapshot1, snapshot2, snapshot1, snapshot2,snapshot1, snapshot2, snapshot1, snapshot2]

gsap.registerPlugin(ScrollTrigger);

const Snapshots = () => {

  const rowsRef = useRef([]);

  useEffect(() => {
    const animationInstances = rowsRef.current.map((row, index) => {
      return gsap.to(row, {
        x: index % 2 === 0 ? 650 : -600,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      animationInstances.forEach(instance => instance.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='h-[70vh] flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-0 my-5 md:my-14'>
      <div className='w-full md:w-9/10 md:h-full overflow-hidden flex justify-center items-center '>
        <div className='flex flex-col rotate-45 gap-4'>
          {Array(7).fill().map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-row gap-4 image-row row-${rowIndex}`}
              ref={el => (rowsRef.current[rowIndex] = el)}
            >
              {images.map((image, index) => (
                <div key={index} className='w-full md:w-1/2 h-1/2'>
                  <Image src={image} alt='snapshot' className='w-auto min-h-[250px] min-w-[250px] object-cover rounded-2xl' />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className='md:flex-1 md:max-w-28 w-full flex md:justify-center items-center'>
        <p className='text-[40px] md:text-[110px] !leading-none !-tracking-wider md:-rotate-90 text-[#EB0028] font-bold md:font-semibold'>
          SNAP<span className='text-black'>SHOTS</span>
        </p>
      </div> */}
    </div>

  )
}

export default Snapshots