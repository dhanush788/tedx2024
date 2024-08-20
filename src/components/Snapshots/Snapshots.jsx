"use client"
import React, { useEffect, useRef } from 'react'
import snapshot1 from '../../assets/img/Snapshot1.png'
import snapshot2 from '../../assets/img/Snapshot2.png'
import img1 from '../../assets/img/snapshot/1.jpg'
import img2 from '../../assets/img/snapshot/2.jpg'
import img3 from '../../assets/img/snapshot/3.jpg'
import img4 from '../../assets/img/snapshot/4.jpg'
import img5 from '../../assets/img/snapshot/5.jpg'
import img6 from '../../assets/img/snapshot/6.jpg'
import img7 from '../../assets/img/snapshot/7.jpg'
import img8 from '../../assets/img/snapshot/8.jpg'
import img9 from '../../assets/img/snapshot/9.jpg'
import img10 from '../../assets/img/snapshot/10.jpg'
import img11 from '../../assets/img/snapshot/11.jpg'
import img12 from '../../assets/img/snapshot/12.jpg'
import img13 from '../../assets/img/snapshot/13.jpg'
import img14 from '../../assets/img/snapshot/14.jpg'
import img15 from '../../assets/img/snapshot/15.jpg'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger);

const Snapshots = () => {

  const rowsRef = useRef([]);

  const images1 = [snapshot2, img1, snapshot1, img1, snapshot2, snapshot2, img1, snapshot2, img1, snapshot2];
  const images2 = [img8, img11, img3,  img12, img9, img10, img13, img14, img8, img8];
  const images3 = [img14, img8, img10, img4, img9, img11, img13, img8, img3, img1,img12];
  const images4 = [img11, img3, img12,  img8, img4, img14, img8, img10, img1, img9, img13];
  const images5 = [ img11, img4, img14, img9,  img8, img13, img1, img8, img10, img8, img12];
  const images6 = [img9, img12, img14, img3, img8, img10, img8, img5,  img4, img11, img13];
  const images7 = [img10, img5, img13, img4, img14, img9, img3, img8,  img8, img11, img12];
  
  

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
                  <Image src={image} alt='snapshot' className={`w-auto h-[250px] min-w-[250px] object-cover rounded-2xl filter-grey`} />
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
