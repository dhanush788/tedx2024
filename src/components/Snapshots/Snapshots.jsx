"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger);

const Snapshots = () => {

  const rowsRef = useRef([]);

  const images1 = [ '/snapshot/1.jpg', '/snapshot/1.jpg',   '/snapshot/1.jpg',  '/snapshot/1.jpg','/snapshot/1.jpg','/snapshot/1.jpg','/snapshot/1.jpg'];
  const images2 = ['/snapshot/8.jpg', '/snapshot/11.jpg', '/snapshot/3.jpg',  '/snapshot/12.jpg', '/snapshot/9.jpg', '/snapshot/10.jpg', '/snapshot/13.jpg', '/snapshot/14.jpg', '/snapshot/8.jpg', '/snapshot/8.jpg'];
  const images3 = ['/snapshot/14.jpg', '/snapshot/8.jpg', '/snapshot/10.jpg', '/snapshot/4.jpg', '/snapshot/11.jpg', '/snapshot/9.jpg',  '/snapshot/13.jpg', '/snapshot/8.jpg', '/snapshot/3.jpg', '/snapshot/1.jpg','/snapshot/12.jpg'];
  const images4 = ['/snapshot/11.jpg', '/snapshot/3.jpg', '/snapshot/12.jpg',  '/snapshot/8.jpg', '/snapshot/4.jpg', '/snapshot/14.jpg', '/snapshot/1.jpg', '/snapshot/8.jpg', '/snapshot/2.jpg', '/snapshot/9.jpg', '/snapshot/13.jpg'];
  const images5 = [ '/snapshot/4.jpg', '/snapshot/13.jpg', '/snapshot/9.jpg', '/snapshot/10.jpg',   '/snapshot/8.jpg', '/snapshot/13.jpg', '/snapshot/1.jpg', '/snapshot/8.jpg', '/snapshot/10.jpg', '/snapshot/8.jpg', '/snapshot/12.jpg'];
  const images6 = ['/snapshot/9.jpg', '/snapshot/12.jpg', '/snapshot/14.jpg', '/snapshot/3.jpg', '/snapshot/8.jpg', '/snapshot/10.jpg', '/snapshot/8.jpg', '/snapshot/5.jpg',  '/snapshot/4.jpg', '/snapshot/11.jpg', '/snapshot/13.jpg'];
  const images7 = ['/snapshot/10.jpg', '/snapshot/5.jpg', '/snapshot/13.jpg', '/snapshot/4.jpg', '/snapshot/14.jpg', '/snapshot/9.jpg', '/snapshot/3.jpg', '/snapshot/8.jpg',  '/snapshot/8.jpg', '/snapshot/11.jpg', '/snapshot/12.jpg'];
  
  

  const imageSets = [images1, images2, images3, images4, images5, images6, images7];

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
          {imageSets.map((images, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-row gap-4 image-row row-${rowIndex}`}
              ref={el => (rowsRef.current[rowIndex] = el)}
            >
              {images.map((image, index) => (
                <div key={index} className='w-full md:w-1/2 h-1/2'>
                  <Image src={image} alt='snapshot' className={`w-auto h-[250px] min-w-[250px] object-cover rounded-2xl filter-grey`} 
                  width={500} height={500}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className='md:flex-1 md:max-w-28 w-full flex md:justify-center items-center'>
        <p className='text-[40px] md:text-[110px] !leading-none !-tracking-wider md:-rotate-90 text-tedRed font-bold md:font-semibold'>
          SNAP<span className='text-black'>SHOTS</span>
        </p>
      </div> */}
      
    </div>
  )
}

export default Snapshots
