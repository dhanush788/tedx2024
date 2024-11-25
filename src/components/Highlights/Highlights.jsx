import React, { useState, useRef, useEffect } from 'react';
import './Highlights.css'

const Highlights = () => {
  const [startX, setStartX] = useState(null);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animationID, setAnimationID] = useState(null);

  const sliderRef = useRef(null);

  const touchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setIsDragging(true);
    if (animationID) cancelAnimationFrame(animationID);
  };

  const touchMove = (event) => {
    if (isDragging && sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const containerWidth = sliderRef.current.parentElement.offsetWidth;

      const currentX = event.touches[0].clientX;
      const diff = currentX - startX;
      const newTranslate = prevTranslate + diff;

      // Boundary checks
      if (newTranslate > 0) {
        setCurrentTranslate(0);
      } else if (Math.abs(newTranslate) > sliderWidth - containerWidth) {
        setCurrentTranslate(-(sliderWidth - containerWidth));
      } else {
        setCurrentTranslate(newTranslate);
      }

      animation();
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
  };

  const mouseDown = (event) => {
    setStartX(event.pageX);
    setIsDragging(true);
    if (animationID) cancelAnimationFrame(animationID);
  };

  const mouseMove = (event) => {
    if (isDragging && sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const containerWidth = sliderRef.current.parentElement.offsetWidth;

      const currentX = event.pageX;
      const diff = currentX - startX;
      const newTranslate = prevTranslate + diff;

      // Boundary checks
      if (newTranslate > 0) {
        setCurrentTranslate(0);
      } else if (Math.abs(newTranslate) > sliderWidth - containerWidth) {
        setCurrentTranslate(-(sliderWidth - containerWidth));
      } else {
        setCurrentTranslate(newTranslate);
      }

      animation();
    }
  };

  const mouseUp = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
  };

  const animation = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
    if (isDragging) {
      const id = requestAnimationFrame(animation);
      setAnimationID(id);
    }
  };

  return (
    <div className="mt-5 md:mt-16 md:mb-3 md h-[431px] overflow-hidden overflow-x-scroll scrollbar-hidden">
      <div
        className="h-full relative cursor-grab active:cursor-grabbing"
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
      >
        <div
          ref={sliderRef}
          className="absolute flex h-full transition-transform duration-300 ease-out px-[8%]"
        >
          {/* Text Section */}
          <div className="flex-shrink-0 h-full w-[350px] md:w-[720px] flex flex-col justify-center pr-4">
            <h1 className="font-Helvetica text-4xl md:text-[56px] leading-tight font-extrabold">
              HIGHLIGHTS FROM <span className="text-tedRed">TEDx</span><span className="text-black">CUSAT</span>
            </h1>
            <p className="text-sm md:text-lg font-normal uppercase">
              <span className="text-black font-Helvetica text-base md:text-xl font-black italic">ON SEPTEMBER 28, 2024,</span> the 5th edition of TEDx CUSAT unfolded as a truly remarkable event, celebrating the theme Kaleidoscope: Alchemy of Voices. The day brought together diverse voices and perspectives, blending them into a harmonious and inspiring experience. Every speaker, whether their topics were different or not, presented their thoughts so beautifully that the audience remained deeply engaged throughout the event. The connections formed between the speakers and the listeners created an atmosphere of shared understanding and insight, making each moment truly enjoyable for all who attended.
            </p>
          </div>

          {/* First Image */}
          <div className="flex-shrink-0 relative w-[645px] h-[430px]">
            <img
              src="2.svg"
              alt="Event Photo"
              className="absolute w-[645px] h-[430px] object-cover rounded-[15px] border border-gray-200"
              draggable="false"
            />
          </div>

          {/* Text Section */}
          <div className="flex-shrink-0 ml-2 w-[350px] md:w-[550px] h-full  flex flex-col justify-center px-4" >
            <p className="text-base md:text-xl font-normal uppercase">
              The success of the <span className='text-tedRed font-Helvetica font-black'>5th edition of TEDxCUSAT</span> on September 28, 2024, was not only a testament to the inspiring speakers or the engaged audience but, most importantly, to the tireless efforts of the volunteers who worked behind the scenes. It was their dedication, pouring their blood, sweat, and tears into every detail, that made the event truly exceptional. Their hard work and passion transformed the vision of <span className='text-black font-Helvetica font-black'>Kaleidoscope: Alchemy of Voices</span> into a reality, ensuring a seamless and unforgettable experience for everyone involved.
            </p>
          </div>

          {/* Second Image */}
          <div className="flex-shrink-0 w-[287px] h-[430px] relative">
            <img
              src="1.svg"
              alt="Event Photo"
              className="absolute  w-[287px] h-[430px] object-cover rounded-[15px] border border-gray-200"
              draggable="false"
            />
          </div>
          {/* Text Section and Third Image */}
          <div className="flex-shrink-0 h-full w-[350px] md:w-[430px] flex flex-col justify-center ml-4 mr-3">
            <p className="text-lg md:text-xl font-normal uppercase ">
              <span className="text-black font-Helvetica font-black">Sidhi </span>inspires audiences with ted talk on her journey from <span className='text-tedRed'>gifted youth</span> to impactful influencer

            </p>
            <div className="flex-shrink-0 relative w-[350px] md:w-[430px] h-[330px] md:h-[287px]">
              <img
                src="3.svg"
                alt="Event Photo"
                className="absolute top-[36px] w-[430px] h-[300px] md:h-[280px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
          </div>
          {/* Text Section and Fourth Image */}
          <div className="flex-shrink-0 h-full w-[381px] flex flex-col justify-center mx-2">
            <div className="flex-shrink-0 relative w-[381px] h-[300px]">
              <img
                src="4.svg"
                alt="Event Photo"
                className="absolute bottom-[42px] w-[381px] h-[260px] md:h-[253px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
            <p className="text-lg md:text-xl font-normal uppercase ">
              What makes <span className='text-tedRed font-Helvetica font-black'>TEDxcusat</span> 2024 so great is not only the speakers but also <span className='font-Helvetica font-black'>the team leaders</span> who worked very hard to prepare for this
            </p>
          </div>
          {/* Text Section and Fifth Image */}
          <div className="flex-shrink-0 h-full flex flex-col w-[380px] md:w-[450px] justify-center mx-2">
            <p className="text-lg md:text-xl font-normal uppercase ">
              A heartfelt thanks to <span className='text-tedRed font-Helvetica font-black'>12 Note 6</span> for their mesmerizing performance, which <span className="text-black font-Helvetica font-black">transported the audience to another dimension </span>and added magic to the 5th edition of TEDx CUSAT.

            </p>
            <div className="flex-shrink-0 relative w-[380px] md:w-[450px] h-[330px] md:h-[292px]">
              <img
                src="5.svg"
                alt="Event Photo"
                className="absolute top-[48px] w-[450px] h-[260px] md:h-[242px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
          </div>
          {/* Sixth Image */}
          <div className="flex-shrink-0 relative w-[242px] h-[430px] mx-2">
            <img
              src="6.svg"
              alt="Event Photo"
              className="absolute w-[242px] h-[430px] object-cover rounded-[15px] border border-gray-200"
              draggable="false"
            />
          </div>
          {/*Text Section and Seventh Image */}
          <div className="flex-shrink-0 h-full w-[430px] flex flex-col justify-center mx-2">
            <div className="flex-shrink-0 relative w-[430px] h-[300px] md:h-[320px]">
              <img
                src="7.svg"
                alt="Event Photo"
                className="absolute bottom-[36px] w-[430px] h-[270px] md:h-[286px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
            <p className="text-lg md:text-xl font-normal uppercase">
              What makes <span className='text-tedRed font-Helvetica font-black'>TEDxcusat</span> 2024 so great is not only the speakers but also <span className='font-Helvetica font-black'>the team leaders</span> who worked very hard to prepare for this
            </p>
          </div>
          {/* Eighth Image */}

          <div className="flex-shrink-0 h-full flex flex-col w-[440px] justify-center mx-2">
            <p className="text-lg md:text-lg font-normal uppercase ">
              <span className='text-tedRed font-Helvetica font-black'>Hani Mustafa </span>
              praised the exhilarating pleasures of <span className="text-black font-Helvetica font-black">Motorbike passion </span> while Anantharaman emphasised the significance of vocal morality in society.

            </p>
            <div className="flex-shrink-0 relative w-[440px] h-[280px]">
              <img
                src="8.svg"
                alt="Event Photo"
                className="absolute top-[48px] w-[440px] h-[242px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
          </div>
          {/* Nineth Image */}
          <div className="flex-shrink-0 h-full flex flex-col  w-[440px] justify-center mx-2">
            <div className="flex-shrink-0 relative w-[440px] h-[283px]">
              <img
                src="9.svg"
                alt="Event Photo"
                className="absolute bottom-[42px] w-[440px] h-[253px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
            <p className="text-lg md:text-lg font-normal uppercase pr-8">
              The TEDx <span className='text-tedRed font-Helvetica font-black'>volunteering team</span> is the backbone of the event, showcasing their dedication and <span className='font-Helvetica font-black'>tireless effort</span> to ensure every detail runs smoothly.
            </p>
          </div>
          {/* Tenth Image */}
          <div className="flex-shrink-0 relative w-[287px] h-[430px] mx-2">
            <img
              src="10.svg"
              alt="Event Photo"
              className="absolute w-[287px] h-[430px] object-cover rounded-[15px] border border-gray-200"
              draggable="false"
            />
          </div>
          {/* Eleventh Image */}

          <div className="flex-shrink-0 h-full w-[450px] flex flex-col justify-center mx-2">
            <p className="text-lg md:text-lg font-normal uppercase ">
              <span className='text-tedRed font-Helvetica font-black'>Hani Mustafa </span>
              praised the exhilarating pleasures of <span className="text-black font-Helvetica font-black">Motorbike passion </span> while Anantharaman emphasised the significance of vocal morality in society.

            </p>
            <div className="flex-shrink-0 relative w-[450px] h-[300px]">
              <img
                src="11.svg"
                alt="Event Photo"
                className="absolute top-[28px] w-[450px] h-[274px] object-cover rounded-[15px] border border-gray-200"
                draggable="false"
              />
            </div>
          </div>

          {/* Twelth Image */}
          <div className="flex-shrink-0 relative w-[287px] h-[430px] ml-3">
            <img
              src="12.svg"
              alt="Event Photo"
              className="absolute w-[287px] h-[430px] object-cover rounded-[15px] border border-gray-200"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;