"use client"
import React, { useRef, useState } from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

import sreerag from '../../assets/img/team/sreerag.jpg'
import archa from '../../assets/img/team/archa.jpg'
import devanand from '../../assets/img/team/devanand.jpg'
import akshay from '../../assets/img/team/akshay.jpeg'
import ivine from '../../assets/img/team/ivine.jpg'
import adil from '../../assets/img/team/adil.jpg'
import basil from '../../assets/img/team/basil.jpg'
import anna from '../../assets/img/team/anna.jpg'
import dhanush from '../../assets/img/team/dhanush.jpg'
import farhan from '../../assets/img/team/farhan.jpg'
import melbin from '../../assets/img/team/melbin.jpg'
import evlyn from '../../assets/img/team/evlyn.jpg'
import sheena from '../../assets/img/team/sheena.jpg'
import diya from '../../assets/img/team/diya.jpg'
import muflih from '../../assets/img/team/muflih.jpg'

import rayif from '../../assets/img/team/web/Rayif.jpg'
import karthik from '../../assets/img/team/web/karthik.jpg'
// import farha from '../../assets/img/team/web/farha.jpg'
import mariya from '../../assets/img/team/web/Mariya.jpg'
import Namitha from '../../assets/img/team/web/Namitha.jpg'
import Nazal from '../../assets/img/team/web/Nazal.jpg'
import Roopesh from '../../assets/img/team/web/Roopesh.jpg'

import Image from 'next/image'
import Header from '@/components/Headers/Header'
import Footer from '@/components/Footer/Footer'


const teamData = {
    coreTeam: [
        {
            heading: "IVINE JOJU",
            subHeading: "Organiser",
            img: ivine
        },
        {
            heading: "Akshay S Vinod",
            subHeading: "Organiser",
            img: akshay
        },
        {
            heading: "Sheena K M",
            subHeading: "Staff Coordinator",
            img: sheena
        },
        {
            heading: "Adil Mohammad",
            subHeading: "Curator",
            img: adil
        },
        {
            heading: "Anna",
            subHeading: "Outreach",
            img: anna
        },
        {
            heading: "Archa",
            subHeading: "Treasurer",
            img: archa
        },
        {
            heading: "Basil",
            subHeading: "Outreach",
            img: basil
        },
        {
            heading: "Deva nandan",
            subHeading: "Production",
            img: devanand
        },
        {
            heading: "Dhanush p k",
            subHeading: "Technical",
            img: dhanush
        },
        {
            heading: "Diya",
            subHeading: "Sponsorship",
            img: diya
        },
        {
            heading: "Evlyn",
            subHeading: "Content",
            img: evlyn
        },
        {
            heading: "Farhan",
            subHeading: "Production",
            img: farhan
        },
        {
            heading: "Melbin sebastian",
            subHeading: "Event and Ambience",
            img: melbin
        },
        {
            heading: "Muflih",
            subHeading: "Event and Ambience",
            img: muflih
        },
        {
            heading: "Sreerag",
            subHeading: "Media",
            img: sreerag
        }
    ],
    webTeam: [
        {
            heading: "ABDUL RAYIF V P",
            subHeading: "",
            img: rayif,
            github: "https://github.com/Abdulrayifvp",
            linkedin: "https://www.linkedin.com/in/rayifvp"
        },
        {
            heading: "Dhanush P K",
            subHeading: "",
            img: dhanush,
            github: "https://github.com/dhanush788",
            linkedin: "https://www.linkedin.com/in/dhanush-p-k"
        },
        {
            heading: "Farha T A",
            subHeading: "",
            img: './farha.jpg',
            github: "https://github.com/Farha00",
            linkedin: "https://www.linkedin.com/in/farha-t-a-09529821b/"
        },
        {
            heading: "Karthik E",
            subHeading: "",
            img: karthik,
            github: "https://github.com/Karthike2003",
            linkedin: "https://www.linkedin.com/in/karthike2003/"
        },
        {
            heading: "Mariya Benny",
            subHeading: "",
            img: mariya,
            github: "https://github.com/Mariyaben",
            linkedin: "https://www.linkedin.com/in/mariyabenny123/"
        },
        {
            heading: "Namitha M S",
            subHeading: "",
            img: Namitha,
            github: "https://github.com/namitha2306",
            linkedin: "https://www.linkedin.com/in/namitha-m-s-835692227/"
        },
        {
            heading: "Nazal Nihad T T ",
            subHeading: "",
            img: Nazal,
            github: "https://github.com/nazalnihad",
            linkedin: "https://www.linkedin.com/in/nazal-nihad/"
        },
        {
            heading: "Roopesh O R",
            subHeading: "",
            img: Roopesh,
            github: "https://github.com/Roopesh2",
            linkedin: "https://www.linkedin.com/in/roopesh-or/"
        }]
};

const Cards = ({ item, i }) => {
    return (
        <div key={i} className={`flex flex-col min-h-[200px] md:min-h-[350px] last:mr-2`}>
            <div className='border border-black rounded-[6px] md:rounded-15 flex flex-col relative min-w-[140px] md:min-w-[300px] '>
                <div className='overflow-hidden w-full h-full rounded-[6px] md:rounded-15'>
                    <Image src={item.img} alt="" id='image' className='h-[200px] md:h-[350px] w-full object-cover ease-in-out object-top hover:scale-105 transition-all duration-300 ease' />
                </div>
                <div className={`px-2 md:px-4 absolute rounded-[6px] md:rounded-15 bottom-0 left-0 w-full flex flex-col transition-all duration-300 ease bg-white min-h-[55px] md:min-h-[100px]`}>
                    <p className={`font-Geist font-bold text-[15px] md:text-2xl pt-2 md:pt-4 uppercase`}>{item.heading}</p>
                    {item.subHeading ?
                        <p className='font-Geist text-sm md:text-lg text-[#EB0028]'>{item.subHeading}</p>
                        :
                        <div className='flex flex-row gap-3 py-2'>
                            <a href={item.linkedin || "https://linkedin.com"} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-xl md:text-2xl text-gray-950 hover:text-[#0077b5] transition-colors" />
                            </a>
                            <a href={item.github || "https://github.com"} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-xl md:text-2xl text-gray-950 hover:text-black transition-colors" />
                            </a>
                        </div>
                    }
                </div>
                <div className='min-h-[55px] md:min-h-[100px]'></div>
            </div>
        </div>
    )
}


const Team = () => {
    const [activeTeam, setActiveTeam] = useState('coreTeam');

    return (
        <div className='w-full flex flex-col inter'>
            <Header />
            <div className='flex flex-col md:flex-row justify-between items-center px-[4%] md:px-[8%] py-2 md:py-5 mt-3 md:mt-5'>
                <p className='font-thunder font-bold md:text-6xl text-4xl leading-snug max-w-md text-left'>
                    MEET OUR <span className='text-[#EB0028]'>TEAM</span>
                </p>
                <div className='flex items-center gap-6'>
                    <button
                        onClick={() => setActiveTeam('coreTeam')}
                        className={`font-Geist text-lg transition-all ${activeTeam === 'coreTeam'
                            ? 'text-[#EB0028] font-bold'
                            : 'text-black hover:text-[#EB0028]'
                            }`}
                    >
                        Core Team
                    </button>
                    <button
                        onClick={() => setActiveTeam('webTeam')}
                        className={`font-Geist text-lg transition-all ${activeTeam === 'webTeam'
                            ? 'text-[#EB0028] font-bold'
                            : 'text-black hover:text-[#EB0028]'
                            }`}
                    >
                        Web Team
                    </button>
                </div>
            </div>

            {/* Grid container */}
            <div className='grid grid-cols-2 md:grid-cols-4 overflow-scroll md:overflow-hidden w-full h-full px-[4%] md:px-[8%] gap-3 md:gap-6 pb-6'>
                {teamData[activeTeam].map((item, i) => (
                    <Cards item={item} key={i} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Team