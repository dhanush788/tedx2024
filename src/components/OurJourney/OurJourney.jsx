'use client';

import React, { useEffect } from 'react'
import Image from 'next/image'
import './OurJourney.css'
import '../../components/utils/resizable.css'
import cardImg from "../../assets/img/jrny.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Marquee from '../Marquee/Marquee';

const content = [
	{
		title: 'Establishment of TEDxCUSAT',
		date: '2020',
		description: 'TEDxCUSAT was founded to provide a dynamic platform where the innovative and intellectual community of Cochin University of Science and Technology can share ideas that inspire change and foster meaningful conversations. Guided by the spirit of TED, the initiative aims to make groundbreaking ideas accessible and transform them into actions that make a real difference.',
		img: cardImg
	},
	{
		title: 'First Edition: "UN-QUINTESSENTIAL"',
		date: '15-05-2020',
		description: '',
		img: cardImg
	},
	{
		title: 'Second Edition: "PAUSE. RESET. RESTART."',
		date: '05-04-2021',
		description: '',
		img: cardImg
	},
	{
		title: 'Third Edition: "TRANSCENDENCE: Beyond All Bounds"',
		date: '04-03-2022',
		description: '',
		img: cardImg
	},
	{
		title: 'Fourth Edition: "DIVERGENCE: Reframing Radical"',
		date: '19-11-2023',
		description: '',
		img: cardImg
	}
]
const OurJourney = () => {
	useEffect(() => {
		let sections = gsap.utils.toArray('.card-wrap');
		let mm = gsap.matchMedia();
		const isMobile = window.matchMedia("(max-width: 768px)").matches;
		const length = sections[0].offsetWidth;
		const percent = length / 10;
		console.log(percent)
		const windowWidth = window.innerWidth;
		const effectiveWidth = windowWidth * 0.87;
		const width = (effectiveWidth * 100) / length;
		mm.add("(min-width: 768px)", () => {

			const scrollTriggerInstance = gsap.to(sections, {
				xPercent: isMobile ? ((-100 * (sections.length - 1) - (percent))) : ((-100 * (sections.length)) + width),
				ease: 'none',
				scrollTrigger: {
					trigger: '.our-journey',
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					start: 'top top',
					end: () => '+=' + (sections.length - 1) * length,
				}
			});

			return () => {
				scrollTriggerInstance.kill();
			};
		});

		return () => {
			mm.revert();
		};
	}, []);
	return (
		<div className='mb-5 our-journey'>
			<div className="pt-10 pb-8 title">
				<div className="hr relative">
					<div className="bg-tedRed border border-black rounded-[6px] md:rounded-15 bg-text flex items-center md:justify-center">
						<h2 className='text-black font-thunder text-xl md:text-5xl uppercase font-bold !leading-none'><span>Our </span><span className="text-white">Journey</span></h2>
					</div>
					<hr className='absolute w-full top-1/2 bg-black -z-10 h-px border-0' />
				</div>
			</div>
			<div className="p-custom !py-[1px] flex flex-nowrap card-container !overflow-scroll md:!overflow-hidden">
				{content.map((item, i) => (
					<div className="card-wrap" key={i}>
						<Card title={item.title} img={item.img} description={item.description} date={item.date}/>
						<Vr excludeBar={content.length - 1 === i && 'true' }/>
					</div>
				))
				}
			</div>
			<hr className='w-full top-1/2 bg-black -z-10 h-px border-0 mb-10 mt-14' />
		</div>
	)
}

const Vr = ({ excludeBar = false }) => {
	return (
		<div className='vertical-bar'>
			{!excludeBar ? <div className="vertical-bar-rule"></div> : ""}
		</div>
	);
}

const Card = ({ title, date, description ,img}) => {
	return (
		<div className="jrny-card rounded-[6px] md:rounded-15 border border-black bg-white">
			<div className="flex p-4">
				<div className="w-5/12 flex flex-col relative">
					<Image
						src={img}
						alt="Speaker at event"
						className='rounded-[6px] md:rounded-15 md:h-[40vh] object-cover'
					/>
					<div className="ml-2 mt-2.5 md:mt-5 flex flex-col justify-between flex-1 card-header-texts">
						<h2 className="font-bold m-0 font-Inter card-title">{title}</h2>
						<p className="text-tedRed text-base !text-justify md:text-2xl font-avenue">{date}</p>
					</div>
				</div>
				<div className="content-text w-7/12 pl-4 pr-2 flex flex-col gap-3">
					<p className="text-sm md:text-base font-medium font-Inter text-description line-clamp-none md:line-clamp-none !leading-tight md:!leading-relaxed">
						{description}
					</p>
					{/* <div className='md:hidden flex bg-[#EB0028] py-3 px-6 rounded-[6px] md:rounded-[15px] text-white font-avenue md:text-3xl mr-auto'>KNOW MORE</div> */}
				</div>
			</div>
		</div>
	);
}

export default OurJourney
