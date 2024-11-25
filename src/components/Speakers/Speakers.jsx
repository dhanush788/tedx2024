"use client"
import React, { useRef, useState } from 'react'
import arrow from '../../assets/img/arrow.svg'
import arrow2 from '../../assets/img/arrow2.svg'
import speakerImage from '../../assets/img/Snapshot2.png'
import romy from '../../assets/img/speakers/Romy.jpg'
import pillai from '../../assets/img/speakers/Pillai.jpg'
import Ravi from '../../assets/img/speakers/Ravi.jpg'
import divya from '../../assets/img/speakers/Divya.jpg'
import steffy from '../../assets/img/speakers/Steffy.jpg'
import shariq from '../../assets/img/speakers/Sharique.jpg'

import Image from 'next/image'


const data = [
    
    {
        heading: "Shariq shamsudeen",
        subHeading: "Entrepreneur",
        description: "Founder and CEO of Fundfolio, an organization focused on building India’s largest community of financially independent individuals. Fundfolio aims to empower its members by offering resources and a supportive network to achieve their financial goals.",
        img: shariq
    },
    {
        heading: "Suresh Pillai",
        subHeading: "Chef",
        description: "Chef Pillai, a social media sensation and celebrity chef, is the Culinary Director at Raviz Kollam and gained fame as a contestant on MasterChef UK 2017. He is celebrated for his innovative cooking techniques.",
        img: pillai
    },
    {
        heading: "Divya S Iyer",
        subHeading: "IAS OFFICER",
        description: "Dr. Divya S. Iyer, a distinguished figure embodying excellence in diverse realms. She currently holds key roles as the Managing Director of Vizhinjam International Seaport Ltd and Project Director of Kerala Solid Waste Management Project. ",
        img: divya
    },
    {
        heading: "Shaun Romy",
        subHeading: "Actress",
        description: "Shaun Romy is an actress, professional fashion model, and social media celebrity who has won the hearts of Malayalis. She debuted as a lead actress at 19 in the Malayalam film Blue Skies, Green Waters, Red Earth (2013) and recently gained acclaim for her role in the hit film Hridayam.",
        img: romy
    },
    , {
        heading: "Steffy Sunny",
        subHeading: "CONTENT CREATOR",
        description: "Steffy Sunny is a content creator and social media influencer known for her linguistic skills in English, Hindi, and Malayalam. A Malayali raised in Delhi, she blends charisma and intellect to reshape digital media, inspiring, educating, and entertaining her audience.",
        img: steffy
    }, 
    , {
        heading: "Major Ravi",
        subHeading: "Filmmaker",
        description: "Major A. K. Raveendran SM, widely known as Major Ravi, is a distinguished Indian Army veteran, National Security Guard commando, actor, and acclaimed film director. His career blends military valor with artistic creativity, earning him bravery medals and screenwriting accolades for his unique storytelling.",
        img: Ravi
    },
]


const Cards = ({ item, i }) => {
    const [hover, setHover] = useState(false)
    return (
        <div key={i} className={`flex flex-col min-h-[350px] md:min-h-[350px] last:mr-2`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='border border-black rounded-[6px] md:rounded-15 flex flex-col relative min-w-[240px] md:min-w-[300px] '>
                <div className='overflow-hidden w-full h-full '>
                    <Image src={item.img} alt="" id='image' className='h-[300px] md:h-[350px] w-full object-cover ease-in-out rounded-[6px] md:rounded-15 object-top filter-greyb' />
                </div>
                <div className={`absolute rounded-[6px] md:rounded-15 bottom-0 left-0 w-full p-custom flex flex-col transition-all duration-300 ease bg-white ${hover ? ' min-h-full ' : 'min-h-[75px] md:min-h-[100px]'}`}>
                    <p className={`font-Geist font-bold text-xl md:text-2xl ${hover ? 'pt-4 md:pt-6' : 'pt-2 md:pt-4'} uppercase`}>{item.heading}</p>
                    <p className='font-Geist text-base md:text-lg text-tedRed'>{item.subHeading}</p>
                    <p className={`font-Helvetica text-sm md:text-base transition-all duration-300 ${hover ? '' : 'hidden'}`}>{item.description}</p>
                </div>
                <div className='min-h-[75px] md:min-h-[100px]'></div>
            </div>
        </div>
    )
}


const   Speakers = () => {
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
            if (container.scrollLeft >= maxScrollLeft - 30) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }
    }

    return (
    <>
        <div className='w-full  flex flex-col inter md:px-[8%] py-5' id='speakers'>
            <div className='flex flex-row justify-between px-[4%] md:px-0'>
                <p className='font-thunder font-bold md:text-6xl text-4xl leading-snug max-w-md text-left'>OUR <span className='text-tedRed'>PREVIOUS</span> SPEAKERS</p>
                <div className='md:flex flex-row hidden gap-3'>
                    <Image src={arrow} alt='slide' className='w-full md:w-12 h-auto cursor-pointer' onClick={scrollLeft} />
                    <Image src={arrow2} alt='slide' className='w-full md:w-12 h-auto cursor-pointer' onClick={scrollRight} />
                </div>
            </div>
            <div ref={scrollRef} className='scrollerHidden flex flex-row overflow-scroll md:overflow-hidden w-full h-full mt-5 md:mt-10 px-[4%] md:px-0 gap-3 md:gap-6'>
                {data.map((item, i) => (
                    <Cards item={item} key={i} />
                ))
                }
            </div>
           
        </div>
        <hr className='w-full top-1/2 bg-black -z-10 h-px border-0 md:mt-16' />
    </>
 
    )
}

export default Speakers