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
		const width = (effectiveWidth * 100 ) / length;
		mm.add("(min-width: 100px)", () => {

			const scrollTriggerInstance = gsap.to(sections, {
				xPercent: isMobile ? ((-100 * (sections.length - 1) - (percent))) : ((-100 * (sections.length ))+ width),
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
			<div className="p-custom !py-[1px] flex flex-nowrap card-container !overflow-hidden">
				<div className="card-wrap">
					<Card />
					<Vr />
				</div>
				<div className="card-wrap">
					<Card />
					<Vr />
				</div>
				<div className="card-wrap">
					<Card />
					<Vr />
				</div>
				<div className="card-wrap">
					<Card />
					<Vr excludeBar="true" />
				</div>
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

const Card = () => {
	return (
		<div className="jrny-card rounded-[6px] md:rounded-15 border border-black bg-white">
			<div className="flex p-4">
				<div className="w-5/12 flex flex-col relative">
					<Image
						src={cardImg}
						alt="Speaker at event"
						className='rounded-[6px] md:rounded-15 md:h-[40vh] object-cover'
					/>
					<div className="ml-2 mt-2.5 md:mt-5 flex flex-col justify-between flex-1 card-header-texts">
						<h2 className="font-bold m-0 font-Inter card-title">CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC</h2>
						<p className="text-tedRed text-base !text-justify md:text-2xl font-avenue">15-05-2020</p>
					</div>
				</div>
				<div className="content-text w-7/12 pl-4 pr-2 flex flex-col gap-3">
					<p className="text-sm md:text-base font-medium font-Inter text-description line-clamp-6 md:line-clamp-none">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  galley of type and scrambled it to make a type specimen book.  It has survived not only  five Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  galley of type and scrambled it to.
					</p>
					{/* <div className='md:hidden flex bg-[#EB0028] py-3 px-6 rounded-[6px] md:rounded-[15px] text-white font-avenue md:text-3xl mr-auto'>KNOW MORE</div> */}
				</div>
			</div>
		</div>
	);
}

export default OurJourney
