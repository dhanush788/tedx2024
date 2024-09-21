import React from 'react'
import pillai from '../../assets/img/speakers/Pillai.jpg'
import Image from 'next/image'

const speakers = [
    {
        name: 'Shariq shamsudeen',
        title: 'Entrepreneur',
        description: 'Founder and CEO of Fundfolio, an organization focused on building India’s largest community of financially independent individuals. Fundfolio aims to empower its members by offering resources and a supportive network to achieve their financial goals.',
        img: pillai
    },
    {
        name: 'Suresh Pillai',
        title: 'Chef',
        description: 'Chef Pillai, a social media sensation and celebrity chef, is the Culinary Director at Raviz Kollam and gained fame as a contestant on MasterChef UK 2017. He is celebrated for his innovative cooking techniques.',
        img: pillai
    },
    {
        name: 'Divya S Iyer',
        title: 'IAS OFFICER',
        description: 'Dr. Divya S. Iyer, a distinguished figure embodying excellence in diverse realms. She currently holds key roles as the Managing Director of Vizhinjam International Seaport Ltd and Project Director of Kerala Solid Waste Management Project. ',
        img: pillai
    }
]


const Card = () => {
    return (
        <div className='flex flex-col md:flex-row gap-[2.8vw]'>
            <div className='md:w-[22.5vw] md:min-w-[22.5vw] w-[69.5vw] min-w-[69.5vw] h-[85vw] md:h-[28vw] rounded-15 overflow-hidden md:mt-[8vw]'>
                <Image src={pillai} alt='Pillai' width={300} height={300} className='h-full w-full object-cover' />
            </div>
            <div className='flex flex-col font-Geist'>
                <p className='uppercase font-bold text-[5.9vw] md:text-[3.2vw] mb-[0.2vw]'>Shariq shamsudeen</p>
                <p className='uppercase text-[4.9vw] md:text-[1.9vw] text-tedRed font-thin'>Entrepreneur</p>
                <p className='text-[3vw] md:text-[1.3vw] font-normal mt-[1vw]'>Founder and CEO of Fundfolio, an organization focused on building India’s largest community of financially independent individuals. Fundfolio aims to empower its members by offering resources and a supportive network to achieve their financial goals.Founder and CEO of Fundfolio, an organization focused on building India’s largest community of financially independent individuals. Fundfolio aims to empower its members by offering resources and a supportive network to achieve their financial goals.Founder and CEO of Fundfolio, an organization focused on building India’s largest community of financially independent individuals. Fundfolio aims to empower its members by offering resources and a supportive network to achieve their financial goals.</p>
            </div>

        </div>
    )
}

const Newspeakers = () => {
    return (
        <div className='flex flex-col inter mx-[4%] md:mx-[8%] my-16 relative min-h-[182vw] md:min-h-[39.4vw]' id='speakers'>
            <div className='absolute md:top-0 md:left-[1.5vw] hidden'>
                <p className='font-thunder uppercase font-bold  md:text-[6.7vw] text-center text-tedRed tracking-wide'>Speakers</p>
            </div>
            <div className='absolute hidden bottom-0 right-0 md:flex md:flex-row justify-between px-20 z-10' style={{ width: 'calc(100% - 25.5vw)' , height: '6vw'}}>
                <div className='w-[40%] flex items-center'>
                    <span class="mr-2 text-black font-extralight text-3xl cursor-pointer">&lt;</span>
                    <hr className='w-full bg-black -z-10 h-px border-0 my-auto' />
                </div>
                <p className='font-avenue my-auto'>1/5</p>
                <div className='w-[40%] flex items-center'>
                    <hr className='w-full bg-black -z-10 h-px border-0 my-auto' />
                    <span class="ml-2 text-black font-extralight text-3xl cursor-pointer">&gt;</span>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full rounded-15'>
                <img src='./Subtract.svg' alt='subtract' className='w-full h-full object-cover hidden md:block' />
                <img src='./Subtract1.svg' alt='subtract' className='w-full h-full object-cover block md:hidden' />
            </div>
            <div className='p-[1.5vw]'>
                <Card />
            </div>
        </div>
    )
}

export default Newspeakers