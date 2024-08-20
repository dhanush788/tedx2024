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
        description: "Founder and CEO of Fundfolio, an organization aiming to build India’s largest Community of Financially Independent Individuals.",
        img: shariq
    },
    {
        heading: "Suresh Pillai",
        subHeading: "Chef",
        description: "Social media sensation and celebrity chef known popularly as chef pillai is culinery director of Raviz kollam and contestant of MasterChef UK 2017.",
        img: pillai
    },
    {
        heading: "Shaun Romy",
        subHeading: "Actress",
        description: "Shaun Romy is an actress, professional fashion model, and social media celebrity, who has captured the hearts of malayalis everywhere. She made her film debut as a lead actress at the age of 19 in the Mollywood (Malayalam cinema) art film Blue Skies, Green Waters, Red Earth (2013). She has recently garnered much recognition from the audience for her role in the very popular film, Hridayam.",
        img: romy
    }
    , {
        heading: "Major Ravi",
        subHeading: "",
        description: "Major A. K. Raveendran SM, known widely as Major Ravi, is a man of many talents—an Indian Army veteran, a National Security Guard commando, an actor, and a celebrated film director. His career is marked by gallantry in service and creativity in the arts. Major Ravi has been honored with medals for his bravery and screenwriting accolades, blending his battlefield experiences with the stories he brings to the screen.",
        img: Ravi
    },
    {
        heading: "Divya S Iyer",
        subHeading: "IAS OFFICER",
        description: "Dr. Divya S. Iyer, a distinguished figure embodying excellence in diverse realms. She currently holds key roles as the Managing Director of Vizhinjam International Seaport Ltd and Project Director of Kerala Solid Waste Management Project. ",
        img: divya
    }
    , {
        heading: "Steffy Sunny",
        subHeading: "CONTENT CREATOR",
        description: "Steffy Sunny is a content creator and social media influencer with a unique blend of talents.A Malayali nurtured in the vibrant atmosphere of Delhi, she developed into a linguistic virtuoso, proficient in English, Hindi, and Malayalam. Steffy is not just a content creator; she’s a storyteller who has harnessed the power of digital media to inspire, educate, and entertain. With a blend of charisma, intellect, and a keen eye for detail, she has reshaped the landscape of content creation, making a lasting impact on her audience.",
        img: steffy
    }, 
]


const Cards = ({ item, i }) => {
    const [hover, setHover] = useState(false)
    return (
        <div key={i} className={`flex flex-col min-h-[350px] md:min-h-[350px]`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='border border-black rounded-[6px] md:rounded-15 flex flex-col relative min-w-[240px] md:min-w-[300px] '>
                <div className='overflow-hidden w-full h-full '>
                    <Image src={item.img} alt="" id='image' className='h-[300px] md:h-full w-full object-cover ease-in-out rounded-[6px] md:rounded-15' />
                </div>
                <div className={`absolute rounded-[6px] md:rounded-15 bottom-0 left-0 w-full p-custom flex flex-col transition-all duration-300 ease bg-white ${hover ? ' min-h-full ' : 'min-h-[75px] md:min-h-[100px]'}`}>
                    <p className={`font-Geist font-bold text-xl md:text-2xl ${hover ? 'pt-4 md:pt-6' : 'pt-2 md:pt-4'} uppercase`}>{item.heading}</p>
                    <p className='font-Geist text-base md:text-lg text-[#EB0028]'>{item.subHeading}</p>
                    <p className={`font-Helvetica text-xs md:text-base transition-all duration-300 ${hover ? '' : 'hidden'}`}>{item.description}</p>
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
        <div className='w-full flex flex-col inter md:px-[8%] py-5'>
            <div className='flex flex-row justify-between px-[4%] md:px-0'>
                <p className='font-thunder font-bold md:text-6xl text-4xl leading-snug max-w-md text-left'>OUR <span className='text-[#EB0028]'>PREVIOUS</span> SPEAKERS</p>
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
    )
}

export default Speakers