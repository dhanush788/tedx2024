"use client";
import React from 'react'
import venu from '../../assets/img/speakers/venu.png'
import pillai from '../../assets/img/speakers/Pillai.jpg'
import hani from '../../assets/img/speakers/hani.png'
import arvind from '../../assets/img/speakers/arvind.png'
import anantharaman from '../../assets/img/speakers/anantharaman.png'
import arrow from '../../assets/img/Arrowlong.svg'
import Image from 'next/image'
import { useState, useEffect } from 'react';


const speakers = [
    {
        name: 'Anantharaman Ajay',
        title: 'Video Creator',
        description: `Anantharaman Ajay, a BITS Pilani alumnus, has made waves as both a popular YouTuber and a talented actor in the Malayalam film industry. His YouTube channel, known for insightful content on technology, lifestyle, and social issues, has garnered a significant following. As an actor, Ajay has impressed audiences with performances in films like "Romancham" (2023). His journey from engineering to entertainment showcases his versatility and inspires youth to pursue their passions. Anantharaman's success across digital and traditional media platforms reflects the evolving landscape of content creation in India.`,
        img: anantharaman
    },
    {
        name: 'Arvind Venugopal',
        title: 'Playback Singer',
        description: `Arvind Venugopal, a remarkable playback singer, is widely known for his incredible achievements and musical journey within the Malayalam music industry, upholding his family's musical legacy. He has made notable contributions and assistance to the industry, capturing the hearts and minds of both young and old with his sensational wave. Arvind's unique voice and emotive performances resonate with audiences, bridging generations through captivating melodies. His commitment to promoting traditional music while embracing contemporary styles has solidified his place as a versatile artist. `,
        img: arvind
    },
    {
        name: 'Hani Musthafa',
        title: 'Automobile Journalist',
        description: `South India's leading automotive journalist has been the region's sole juror for the World Car Awards since 2019. His expertise and discerning eye for quality have earned him recognition in the industry, allowing him to influence the selection of the best vehicles globally. In 2010, he launched the Flywheel Auto Show, which has grown into a prominent hub for auto events, content creators, and multi-brand garages. The show not only highlights the latest trends and innovations in the automotive world but also serves as a platform for networking and collaboration among industry professionals.`,
        img: hani
    },
    {
        name: 'Dr. V. Venu',
        title: 'Retired IAS Officer',
        description: `Dr. V. Venu IAS, a senior Indian Administrative Services officer from the 1990 batch, is widely respected for his charismatic leadership and professional achievements. With key roles at both state and central levels, he has made significant contributions in tourism, culture, and public policy. Currently serving as the 48th Chief Secretary of Kerala, Dr. Venu is highly regarded, particularly by the youth, who see him as a role model for effective governance and social responsibility. His ability to connect with people, combined with his strategic vision, has transformed various sectors and improved the lives of many.`,
        img: venu
    }
]


    const Card = ({ index }) => {

        const [fadeIn, setFadeIn] = useState(true);
        const [displayedIndex, setDisplayedIndex] = useState(index);

        useEffect(() => {
            setFadeIn(false); 
    
            const timer = setTimeout(() => {
                setDisplayedIndex(index); 
                setFadeIn(true);
            }, 500);
    
            return () => clearTimeout(timer);
        }, [index]);

        return (
            <div className='flex flex-col md:flex-row gap-[2.8vw]'>
                <div className='md:w-[22.5vw] md:min-w-[22.5vw] w-[68.8vw] min-w-[68.8vw] h-[92vw] md:h-[28vw] rounded-15 overflow-hidden md:mt-[8vw] relative'>
                    <Image src={speakers[displayedIndex].img} alt='Pillai' width={300} height={300} className={`h-full w-full object-cover ${fadeIn ? 'fadein fadein-active' : 'fadein'}`} />
                    <Image src={speakers[index].img} alt='Pillai' width={300} height={300} className={`h-full w-full object-cover absolute top-0 left-0 -z-30`} />
                </div>
                <div className={`flex flex-col font-Geist transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                    <p className='uppercase font-bold text-[5.9vw] md:text-[3.2vw] mb-[0.2vw]'>{speakers[displayedIndex].name}</p>
                    <p className='uppercase text-[4.9vw] md:text-[1.9vw] text-tedRed font-thin'>{speakers[displayedIndex].title}</p>
                    <p className='text-[3.2vw] md:text-[1.3vw] font-normal mt-[1vw]'>{speakers[displayedIndex].description}</p>
                </div>

            </div>
        )
    }

const Newspeakers = () => {
    const [index, setIndex] = React.useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % speakers.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [speakers.length,index]);

    return (
        <>
            <p className='font-thunder uppercase font-bold text-[12.7vw] text-tedRed md:hidden mx-[4%]'>Speakers</p>
            <div className='flex flex-col inter mx-[4%] md:mx-[8%] md:my-16 relative min-h-[181.65vw] md:min-h-[39.4vw]' id='speakers'>
                <div className='absolute md:top-0 md:left-[1.5vw] hidden md:block'>
                    <p className='font-thunder uppercase font-bold md:text-[6.7vw] text-center text-tedRed tracking-wide'>Speakers</p>
                </div>
                <div className='absolute bottom-[130vw] md:bottom-0 -right-[24vw] md:right-0 flex flex-row justify-between md:px-[5vw] z-10 rotate-90 md:rotate-0' style={{ width: 'calc(100% - 25.5vw)', height: '6vw' }}>
                    <div className='w-[25vw] md:w-[16vw] flex items-center'>
                        <Image src={arrow} alt='arrow w-full h-auto' className='cursor-pointer' onClick={() => setIndex((index - 1 + speakers.length) % speakers.length)} />
                    </div>
                    <p className='font-avenue my-auto -rotate-90 md:rotate-0'>{index + 1}/{speakers.length}</p>
                    <div className='w-[25vw] md:w-[16vw] flex items-center rotate-180'>
                        <Image src={arrow} alt='arrow w-full h-auto' className='cursor-pointer' onClick={() => setIndex((index + 1) % speakers.length)} />
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full rounded-15'>
                    <img src='./Subtract.svg' alt='subtract' className='w-full h-full object-cover hidden md:block' />
                    <img src='./Subtract1.svg' alt='subtract' className='w-full h-full object-cover block md:hidden' />
                </div>
                <div className='p-[3vw] md:p-[1.5vw]'>
                    <Card index={index} />
                </div>
            </div>
        </>
    )
}

export default Newspeakers