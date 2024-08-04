import React from 'react';
import logo from '../../assets/img/logo-black.svg';
import Image from 'next/image';

const About = () => {
  return (
    <div className='p-custom my-5 md:my-10'>
      <div className='box-border flex flex-col md:flex-row border border-black rounded-[15px] px-3 py-5 md:px-8 md:py-10 gap-3 md:gap-5 bg-white'>
        <div className='flex flex-col md:items-center justify-center !float-left	'>
          <p className='text-5xl md:text-[130px] font-semibold font-thunder !leading-none'>ABOUT</p>
          <p className='text-[#EB0028] md:text-4xl font-Helvetica font-bold -mt-3'>TED<sup>x</sup><span className='text-black font-HelveticaLight'>CUSAT</span></p>
          {/* <Image src={logo} alt='logo' className='w-36 h-auto md:w-auto md:h-20 md:-mt-10' /> */}
          {/* <div className='hidden md:flex bg-[#EB0028] py-4 px-9 rounded-2xl text-white font-avenue md:text-3xl'>KNOW MORE</div> */}
        </div>
          <p className='font-medium text-sm md:text-base font-Inter uppercase'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.
          </p>
        <div className='flex flex-col gap-3'>

          {/* <div className='md:hidden flex bg-[#EB0028] py-3 px-6 rounded-xl text-white font-avenue md:text-3xl mr-auto'>KNOW MORE</div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
