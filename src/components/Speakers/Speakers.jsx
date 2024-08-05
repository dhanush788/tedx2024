"use client"
import React, { useRef, useState } from 'react'
import arrow from '../../assets/img/arrow.svg'
import arrow2 from '../../assets/img/arrow2.svg'
import speakerImage from '../../assets/img/snapshot2.png'

import Image from 'next/image'


const data = [{
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
    , {
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
    , {
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
    , {
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
    , {
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
    , {
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
    , {
    heading: "PadmaLakshmi",
    subHeading: "LAWYER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
    img: speakerImage
}
]


const Cards = ({ item, i }) => {
    const [hover, setHover] = useState(false)
    return (
        <div key={i} className={`flex flex-col min-h-[250px] md:min-h-[350px]`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='border border-black rounded-15 flex flex-col relative'>
                <div className='overflow-hidden w-full '>
                    <Image src={item.img} alt="" id='image' className='h-full object-cover ease-in-out min-w-[210px] md:min-w-[300px] rounded-15' />
                </div>
                <div className={`absolute rounded-15 bottom-0 left-0 w-full p-custom flex flex-col duration-300 ease bg-white ${hover ? ' min-h-full ' : 'min-h-[75px] md:min-h-[100px]'}`}>
                    <p className={`font-Geist font-bold text-xl md:text-2xl ${hover ? 'pt-4 md:pt-6' : 'pt-2 md:pt-4'}`}>{item.heading}</p>
                    <p className='font-Geist text-base md:text-lg text-[#EB0028]'>{item.subHeading}</p>
                    <p className={`font-Helvetica text-xs md:text-base ${hover ? '' : 'hidden'}`}>{item.description}</p>
                </div>
                <div className='min-h-[75px] md:min-h-[100px]'></div>
            </div>
        </div>
    )
}


const Speakers = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const l = document.getElementById('image').offsetWidth + 25.2;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            container.scrollBy({
                left: -l,
                behavior: 'smooth'
            });
            if (container.scrollLeft <= 0) {
                container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
            }
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const l = document.getElementById('image').offsetWidth + 25.2;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            container.scrollBy({
                left: l,
                behavior: 'smooth'
            });
            if (container.scrollLeft >= maxScrollLeft - 25) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }
    }

    return (
        <div className='w-full flex flex-col inter md:px-[8%]'>
            <div className='flex flex-row justify-between px-[8%] md:px-0'>
                <p className='font-thunder font-bold md:text-6xl text-2xl leading-snug max-w-md text-left'>OUR <span className='text-[#EB0028]'>PREVIOUS</span> SPEAKERS</p>
                <div className='md:flex flex-row hidden gap-3'>
                    <Image src={arrow} alt='slide' className='w-full md:w-12 h-auto cursor-pointer' onClick={scrollLeft} />
                    <Image src={arrow2} alt='slide' className='w-full md:w-12 h-auto cursor-pointer' onClick={scrollRight} />
                </div>
            </div>
            <div ref={scrollRef} className='scroll-container flex flex-row overflow-scroll md:overflow-hidden w-full h-full pl-[8%] md:pl-0 gap-3 md:gap-6'>
                {data.map((item, i) => (
                    <Cards item={item} key={i} />
                ))
                }
            </div>
        </div>
    )
}

export default Speakers