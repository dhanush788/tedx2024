import React from 'react';
import logo from '../../assets/img/logo-black.svg';
import Image from 'next/image';

const About = () => {
  return (
    <div className='p-custom my-5 md:my-10' id='about'>
      <div className='box-border flex flex-col md:flex-row border border-black rounded-[6px] md:rounded-[15px] px-3 py-5 md:px-8 md:py-10 gap-3 md:gap-5 bg-white'>
        <div className='flex flex-col md:items-center justify-center !float-left	'>
          <p className='text-5xl md:text-[130px] font-semibold font-thunder !leading-none'>ABOUT</p>
          <p className='text-[#EB0028] md:text-4xl font-Helvetica font-bold -mt-3'>TED<sup>x</sup><span className='text-black font-HelveticaLight'>CUSAT</span></p>
          {/* <Image src={logo} alt='logo' className='w-36 h-auto md:w-auto md:h-20 md:-mt-10' /> */}
          {/* <div className='hidden md:flex bg-[#EB0028] py-4 px-9 rounded-2xl text-white font-avenue md:text-3xl'>KNOW MORE</div> */}
        </div>
        <p className='font-medium text-sm md:text-base font-Inter '>
          TEDxCUSAT is a dynamic platform where the brightest minds of Cochin University of 
          Science and Technology come together to share ideas that have the power to inspire 
          meaningful change. This year's event, centered around the theme <span>"Kaleidoscope: Alchemy 
          of Voices,"</span> offers a blend of live talks and curated videos designed to spark thought-provoking 
          conversations. TEDxCUSAT goes beyond the traditional format of talks; it’s about creating a space where 
          ideas can be transformed into actions that lead to real-world impact. Our goal is to make these ideas accessible 
          and to inspire our community to turn them into catalysts for positive change.
        </p>
        <div className='flex flex-col gap-3'>

          {/* <div className='md:hidden flex bg-[#EB0028] py-3 px-6 rounded-xl text-white font-avenue md:text-3xl mr-auto'>KNOW MORE</div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
