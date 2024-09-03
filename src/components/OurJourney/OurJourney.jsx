'use client';

import React, { useEffect } from 'react'
import Image from 'next/image'
import './OurJourney.css'
import '../../components/utils/resizable.css'
import gsap from 'gsap';

const content = [
	{
		title: '#1 UN-QUINTESSENTIAL',
		date: '15-05-2020',
		description: "The first TEDxCUSAT celebrated imperfection and shared humanity, featuring prominent speakers like Dr. M.R. Rajagopal and S. Somnath. Highlighted in The Times of India, the event laid a strong foundation for TEDxCUSAT's mission to push boundaries and inspire transformative ideas, fostering innovation and meaningful connections.",
		img: '/journey/5.png'
	},
	{
		title: '#2 PAUSE. RESET. RESTART.',
		date: '05-04-2021',
		description: 'In a moment of reflection and rejuvenation after the challenges of the COVID-19 pandemic, TEDxCUSAT brought together diverse voices to share visions for a better future. The event provided a platform for introspection, inspiring attendees to rebuild with renewed ambition, hope, and resilience, marking a new beginning.',
		img: '/journey/1.jpeg'
	},
	{
		title: '#3 TRANSCENDENCE: Beyond All Bounds',
		date: '05-04-2022',
		description: '"TRANSCENDENCE: Beyond All Bounds" explored stories of surpassing limits and venturing into uncharted territories. The event encouraged the audience to aspire for greatness and embrace extraordinary possibilities through powerful narratives, inspiring them to break barriers and reach new heights.',
		img: '/journey/2.jpeg'
	},
	{
		title: '#4 DIVERGENCE: Reframing Radical',
		date: '19-11-2023',
		description: 'The event explored fresh perspectives on life, innovation, and change. Thought leaders who challenge traditional norms and inspire transformative thinking took the stage, motivating attendees to adopt new viewpoints and embrace change as a catalyst for progress. The event encouraged a shift in mindset, empowering participants to see radicalism as a force for positive transformation.',
		img: '/journey/3.jpg'
	}
]
const OurJourney = () => {
	useEffect(() => {
		let sections = gsap.utils.toArray('.card-wrap');
		let mm = gsap.matchMedia();
		const isMobile = window.matchMedia("(max-width: 768px)").matches;
		const length = sections[0].offsetWidth;
		const percent = length / 10;
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
					<div className="bg-tedRed border border-black rounded-[6px] md:rounded-15 bg-text py-[18px] px-[20px] md:px-[40px] flex items-center md:justify-center text-center">
						<h2 className='text-black font-thunder text-2xl md:text-5xl uppercase font-bold !leading-none w-[100%]'><span>Our </span><span className="text-white">Journey</span></h2>
					</div>
					<hr className='absolute w-full top-1/2 bg-black -z-10 h-px border-0' />
				</div>
			</div>
			<div className="p-custom !py-[1px] flex flex-nowrap card-container !overflow-scroll md:!overflow-hidden">
				{content.map((item, i) => (
					<div className="card-wrap" key={i}>
						<Card title={item.title} img={item.img} description={item.description} date={item.date} />
						<Vr excludeBar={content.length - 1 === i && 'true'} />
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

const Card = ({ title, date, description, img }) => {
	return (
		<div className="jrny-card rounded-[6px] md:rounded-15 border border-black bg-white">
			<div className="flex p-4">
				<div className="w-7/12 flex flex-col relative">
					<div className='rounded-[6px] md:rounded-15 h-[25vh] md:h-[40vh] overflow-hidden'>
						<Image
							src={img}
							alt="Speaker at event"
							width={500}
							height={500}
							className='rounded-[6px] md:rounded-15 h-[25vh] md:h-[40vh] object-cover filter-grey hover:scale-110 transition-transform duration-300'
						/>
					</div>
					<div className="ml-2 mt-2.5 md:mt-5 flex flex-col justify-between flex-1 card-header-texts">
						<h2 className="font-bold m-0 font-Inter card-title">{title}</h2>
						<p className="text-tedRed text-base !text-justify md:text-2xl font-avenue">{date}</p>
					</div>
				</div>
				<div className="content-text w-7/12 pl-4 pr-2 flex flex-col gap-3">
					<p className="text-sm md:text-base font-medium font-Inter text-description line-clamp-none md:line-clamp-none !leading-tight md:!leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default OurJourney
