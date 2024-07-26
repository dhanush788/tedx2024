'use client';

import React from 'react'
import Image from 'next/image'
import './OurJourney.css'
import '../../components/utils/resizable.css'
import cardImg from "../../assets/img/jrny.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';


const OurJourney = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		let sections = gsap.utils.toArray(".card-wrap");

		let mm = gsap.matchMedia();
		mm.add("(min-width: 810px)", () => {

			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: ".our-journey",
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					end: () => "+=" + document.querySelector(".card-container").offsetWidth
				}
			});
		})

	},
	);
	return (
		<div className='mb-11 our-journey'>
			<div className="pt-8 pb-8 title">
				<div className="hr relative">
					<div className="bg-text bg-tedRed border border-black rounded-15">
						<h2 className='text-black font-thunder text-5xl uppercase font-bold'>Our <span className="text-white">Journey</span></h2>
					</div>
					<hr className='absolute w-full top-1/2 bg-black -z-10 h-px border-0' />
				</div>
			</div>
			<div className="p-custom flex flex-nowrap card-container">
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
		<div className="jrny-card rounded-15 border border-black">
			<div className="flex p-4">
				<div className="w-5/12 flex flex-col relative">
					<Image
						src={cardImg}
						alt="Speaker at event"
						className='rounded-15'
					/>
					<div className="ml-2 mt-2.5 flex flex-col justify-between flex-1 card-header-texts">
						<h2 className="font-bold m-0 font-Inter card-title">CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC</h2>
						<p className="text-tedRed text-2xl font-avenue">15-05-2020</p>
					</div>
				</div>
				<div className="content-text w-7/12 pl-4 pr-2 flex flex-col">
					<p className="text-base font-medium font-Inter text-description">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  galley of type and scrambled it to make a type specimen book.  It has survived not only  five Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  galley of type and scrambled it to.
					</p>
				</div>
			</div>
		</div>
	);
}

export default OurJourney
