"use client"
import React, { useEffect, useState } from 'react';
import copy from '../../../assets/img/copy.svg';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Headers/Header';
import img from '../../../assets/img/team/adil.jpg'
import meme1 from '../../../assets/img/meme/meme1.jpg'
import meme2 from '../../../assets/img/meme/meme2.jpg'

const question = [
    {
        "slug": "V5ZC1500",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "Name the expert who spoke at TEDxCUSAT about the promise and perils of Ed-Tech, emphasizing the importance of solving educational problems through technology rather than just increasing its usage. ( Clue: He is a Harvard graduate with a degree in computer science from NYU. )",
        "code": "Achuth Krishnan",
        "redeem": "C9D3-KL6T-V5ZC",
        "image": img
    },
    {
        "slug": "J8YH500",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "Which content creator and social media influencer, who spoke at TEDxCUSAT, emphasizes breaking free from societal molds and finding fulfillment in embracing life's uncertainties? ( Clue: He/She reflected on journey into content creation and advocated for navigating moments of confusion and shattering conventional norms to discover one's true passions. )",
        "code": "Steffy Sunny",
        "redeem": "G4X1-Q7L2-J8YH",
        "image": img
    },
    {
        "slug": "V3J4PASS",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "Which TEDxCUSAT speaker highlighted that creating with intention can lead to beautiful solutions, and stressed that mistakes are part of the learning process, reflecting on his own journey as a musician and designer? (Clue: Band Agam )",
        "code": "Harish Sivaramakrishnan",
        "redeem": "E2N6-P8T4-V3J4",
        "image": img
    },
    {
        "slug": "T2VEHAMP",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "Name the TEDxCUSAT speaker who, at the age of 34, ventured into sports for the first time, won gold medals in an international championship, and went on to inspire others with her story of perseverance and transformation. (Clue: Boxer)",
        "code": "Ann Mary Philip",
        "redeem": "H7L5-R9X3-T2VE",
        "image": img
    },
    {
        "slug": "M9L2TSHI",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "Name the TEDxCUSAT speaker known for roles in Malayalam cinema, is also a human rights lawyer and a trained Bharatanatyam dancer with a Doordarshan accreditation? (Clue: Malarvadi Arts Club )",
        "code": "Apoorva Bose",
        "redeem": "T6Q1-J8D4-M9L2",
        "image": img
    },
    {
        "slug": "CV5ZC1500",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "",
        "code": "C9D3-KL6T-V5ZC",
        "redeem": "CASH-001",
        "image": img
    },
    {
        "slug": "GJ8YH500",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "",
        "code": "G4X1-Q7L2-J8YH",
        "redeem": "VOUCH-002",
        "image": img
    },
    {
        "slug": "EV3J4PASS",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "",
        "code": "E2N6-P8T4-V3J4",
        "redeem": "PASS-003",
        "image": img
    },
    {
        "slug": "HT2VEHAMP",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "",
        "code": "H7L5-R9X3-T2VE",
        "redeem": "KIT-004",
        "image": img
    },
    {
        "slug": "TM9L2TSHI",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "",
        "code": "T6Q1-J8D4-M9L2",
        "redeem": "T-SHT-005",
        "image": img
    }
];

const Page = () => {
    const [data, setData] = useState([]);
    const [isSlugChecked, setIsSlugChecked] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [error, setError] = useState(false);
    const memes = [meme1, meme2];
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];

    useEffect(() => {
        const slug = window.location.href.split('/').pop().toLowerCase();
        if (slug) {
            const found = question.find(item => item.slug.toLowerCase() === slug.toLowerCase());
            if (found) {
                setData(found);
            }
            console.log(data)
        }
        setIsSlugChecked(true);
    }, []);

    const popUp = () => {
        navigator.clipboard.writeText(data.redeem);
        setIsCopied(true)
    };

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        }
    }, [isCopied])

    const handleClick = () => {
        const answer = document.getElementById('first-input').value;

        if (answer.toLowerCase().includes(data.code.toLowerCase())) {
            setShowLink(true);
        }
        else {
            setError(true);
        }
    }

    const handleCoupon = () => {
        const answer = document.getElementById('second-input').value;

        if (answer.toLowerCase().includes(data.code.toLowerCase())) {
            setShowLink(true);
        }
        else {
            setError(true);
        }
    }

    return (
        <>
            <Header />
            <div className='flex flex-col p-[8%] w-full gap-4 font-avenue'>
                {!isSlugChecked ? null : (
                    data.length === 0 ? (
                        <>
                            <Image src={randomMeme} alt='meme' className='w-full h-auto rounded-lg' />
                            <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl'>
                                Oops! Looks like this isn’t the winning QR code. 😅 But don’t give up—there’s still a chance to find the real prize. Keep hunting!
                            </p>
                            <p className='text-base md:text-2xl'>Something incredible is brewing at TEDxCUSAT, and you won't want to miss it! Our 5th edition is on the horizon,
                                and we're about to take you on a journey like never before. With the theme <span className='text-tedRed'>“Kaleidoscope: Alchemy of Voices,”</span>
                                we're gearing up to bring together some of the most brilliant minds from Cochin University of Science And Technology
                                to spark conversations that will challenge, inspire, and transform.
                            </p>
                            <p className='text-base md:text-2xl'>This is more than just an event; it’s the beginning of something extraordinary. Keep your eyes peeled, and make
                                sure you’re following us on all our social media platforms to catch every update, teaser, and exclusive content.
                                Trust us, you’ll want to be part of this!
                            </p>
                            <a href='https://linktr.ee/tedxcusat' className='underline font-bold'>https://linktr.ee/tedxcusat</a>
                            <a href='mailto:outreach@tedxcusat.in' className='text-base md:text-2xl'>Email: outreach@tedxcusat.in </a>
                        </>
                    ) : (
                        <>
                            <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl'>
                                Congratulations! 🎉
                            </p>
                            <p className='text-base md:text-xl'>
                                You've scanned one of our exclusive QR codes, and we're excited to offer you a special reward!
                            </p>
                            <div className='border-2 border-black rounded-lg p-custom'>
                                {data.prefinal ? (
                                    <>
                                        {!showLink ?
                                            (
                                                <div className='py-8'>
                                                    <p className='text-lg md:text-xl text-tedRed'>Question</p>
                                                    < p className='text-xl md:text-3xl'>
                                                        {data.question}
                                                    </p>
                                                    <input id="first-input" type='text' className='border-2 border-black rounded-md w-full text-center my-4 py-2 bg-transparent' />
                                                    {error && (<p className='text-red-500 text-sm md:text-lg'>incorrect answer</p>)}
                                                    <button className='bg-tedRed text-white p-2 rounded-lg mt-4 w-full' onClick={handleClick}>Submit</button>
                                                </div>
                                            )
                                            :
                                            (
                                                <>
                                                    <p className='text-xl md:text-3xl'>
                                                        Your final solution is here : 
                                                        {/* <a href={data.link} className='font-bold underline' target='_blank' rel='noreferrer'>link</a> */}
                                                    </p>
                                                    <Image src={data.image} alt='image' className='w-48 h-48 rounded-full mx-auto' />
                                                    <p className='text-xl md:text-3xl'>
                                                        Your Unlock Code: <span className='font-bold'>{data.redeem}</span>
                                                        <Image src={copy} alt='copy' className='w-4 h-4 inline-block ml-2' onClick={popUp} />
                                                    </p>
                                                </>
                                            )

                                        }
                                    </>
                                ) : (
                                    <>
                                        {!showLink ? (
                                            <>
                                                <div className='py-8'>
                                                    <p className='text-lg md:text-xl text-tedRed'>Enter Unlock Code</p>
                                                    <input id="second-input" type='text' className='border-2 border-black rounded-md w-full text-center my-4 py-2 bg-transparent' />
                                                    {error && (<p className='text-red-500 text-sm md:text-lg'>incorrect unlock code</p>)}
                                                    <button className='bg-tedRed text-white p-2 rounded-lg mt-4 w-full' onClick={handleCoupon}>Submit</button>
                                                </div>
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <p className='text-xl md:text-3xl pt-5'>
                                                        Your Redeem Code: <span className='font-bold'>{data.redeem}</span>
                                                        <Image src={copy} alt='copy' className='w-4 h-4 inline-block ml-2' onClick={popUp} />
                                                    </p>
                                                    <p className='text-base md:text-xl py-3'>Time’s ticking! Send the redeem code to our Instagram handle... it’s a race against the clock. Don’t forget to complete all the rules and criteria!</p>
                                                </>

                                            )

                                        }
                                    </>
                                )
                                }
                            </div>
                            {/* <p className='text-sm md:text-lg'>
                                Use this code to claim your prize by sending the code to TEDxCUSAT's official Instagram handle
                                <a href='https://ig.me/m/tedxcusat' className='text-tedRed font-bold'> (@tedxcusat)</a>.
                            </p> */}
                            <p className='text-lg md:text-2xl font-semibold'>How to Play:                            </p>
                            <p className='text-sm md:text-lg'>1. We’ve placed multiple QR codes around the campus. Find the special QR codes that contain the Unlock Code and the Location of the Final Hidden QR Code.
                                <br />2. Be the first to use the Unlock Code to unlock the Final QR Code and obtain the redeem code for your reward.
                                <br />3. Send the redeem code to our official Instagram handle
                                <a href='https://ig.me/m/tedxcusat' className='text-tedRed font-bold'> (@tedxcusat) </a>
                                to claim your prize.
                            </p>
                            <p className='text-lg md:text-2xl font-semibold'>Rules:</p>
                            <p className='text-sm md:text-lg'>1. Follow all our social media handles and subscribe to our exclusive newsletter edition via our Linktree.
                                <br />2. Only the first person to send the final redeem code to our Instagram will be eligible to claim the reward.
                                <br />3. Each participant is eligible to claim only one prize.
                            </p>
                            <p className='text-lg md:text-2xl font-semibold'>
                                What’s Next?
                            </p>
                            <p className='text-sm md:text-lg'>
                                To stay updated with all our latest news, upcoming events, and special offers, make sure to visit our Linktree. We’ve got a range of exciting links and information just for you!
                                &nbsp;
                                <a href='https://linktr.ee/tedxcusat' className='underline font-bold'>https://linktr.ee/tedxcusat</a>
                            </p>
                            <p className='text-sm md:text-lg'>
                                We appreciate your enthusiasm and participation. Don’t forget to check out more exciting events
                                and offers coming your way. Feel free to contact us if you have any questions or need further
                                assistance.
                            </p>
                            <p className='text-sm md:text-lg'>
                                Email: <a href='mailto:outreach@tedxcusat.in' className='underline font-bold'>outreach@tedxcusat.in</a>
                            </p>
                        </>
                    )
                )}
                {
                    isCopied && (
                        <div className='fixed z-10 bottom-5 bg-white p-4 rounded-lg left-[50%] -translate-x-[50%] w-3/5'>
                            <p className='text-tedRed text-sm md:text-lg font-bold text-center'>
                                Code copied to clipboard! ✓
                            </p>
                        </div>
                    )
                }
            </div >
            <Footer />
        </>
    );
};

export default Page;
