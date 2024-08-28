"use client"
import React, { useEffect, useState } from 'react';
import copy from '../../../assets/img/copy.svg';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Headers/Header';

const question = [
    {
        "slug": "vibrant-pattern",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "COLORSHIFT",
    },
    {
        "slug": "dynamic-reflection",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "MIRRORMAGIC",
    },
    {
        "slug": "prism-spectacle",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "RAINBOWFLUX"
    },
    {
        "slug": "infinite-design",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "FRACTALIZE"
    },
    {
        "slug": "kaleido-dream",
        "prefinal": true,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "SPECTRAVIEW"
    },
    {
        "slug": "vibrant-patter",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "COLORSHIFT",
    },
    {
        "slug": "dynamic-reflectio",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "MIRRORMAGIC",
    },
    {
        "slug": "prism-spectacl",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "RAINBOWFLUX"
    },
    {
        "slug": "infinite-desig",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "FRACTALIZE"
    },
    {
        "slug": "kaleido-drea",
        "prefinal": false,
        "link": "https://www.google.com/maps/place/Seminar+Complex,+CUSAT/@10.043907,76.324908,16z/data=!4m6!3m5!1s0x3b080d223eeb1de1:0xce06a9f0d256857a!8m2!3d10.0439073!4d76.3249082!16s%2Fg%2F11cltd2jr7?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
        "question": "What is the capital of India?",
        "code": "SPECTRAVIEW"
    }
];

const Page = () => {
    const [data, setData] = useState([]);
    const [isSlugChecked, setIsSlugChecked] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const slug = window.location.href.split('/').pop().toLowerCase();
        if (slug) {
            const found = question.find(item => item.slug === slug);
            if (found) {
                setData(found);
            }
        }
        setIsSlugChecked(true);
    }, []);

    const popUp = () => {
        navigator.clipboard.writeText(code)
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
        const answer = document.querySelector('input').value;
        if (answer.toLowerCase() === data.code.toLowerCase()) {
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
                    data === '' ? (
                        <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl'>
                            This page could not be found. 😢
                        </p>
                    ) : (
                        <>
                            <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl'>
                                Congratulations! 🎉
                            </p>
                            <p className='text-base md:text-xl'>
                                You've scanned one of our exclusive QR codes, and we're excited to offer you a special reward!
                            </p>
                            {data.prefinal ? (
                                <>
                                    {!showLink ?
                                            (
                                                <div className='py-8'>
                                                    < p className='text-xl md:text-3xl'>
                                                        {data.question}
                                                    </p>
                                                    <input type='text' className='border-b-2 border-tedRed w-full text-center my-4 py-2 bg-transparent' />
                                                    {error && ( <p className='text-red-500 text-sm md:text-lg'>invalid answer</p>)}
                                                    <button className='bg-tedRed text-white p-2 rounded-lg mt-4 w-full' onClick={handleClick}>Submit</button>
                                                </div>
                                            )
                                            : 
                                            (
                                                <p className='text-xl md:text-3xl'>
                                                    Your final solution is here : <a href={data.link} className='font-bold underline' target='_blank' rel='noreferrer'>link</a>
                                                </p>
                                            )

                                    }
                                </>
                            ) : (
                                <p className='text-xl md:text-3xl'>
                                    Your Redeem Code: <span className='font-bold'>{data.code}</span>
                                    <Image src={copy} alt='copy' className='w-4 h-4 inline-block ml-2' onClick={popUp} />
                                </p>
                            )
                            }
                            <p className='text-sm md:text-lg'>
                                Use this code to claim your prize by sending the code to TEDxCUSAT's official Instagram handle
                                <a href='https://ig.me/m/tedxcusat' className='text-tedRed font-bold'> (@tedxcusat)</a>.
                            </p>
                            <p className='text-lg md:text-2xl font-semibold'>
                                What’s Next?
                            </p>
                            <p className='text-sm md:text-lg'>
                                To stay updated with all our latest news, upcoming events, and special offers, make sure to visit our Linktree.
                                We’ve got a range of exciting links and information just for you!&nbsp;
                                <a href='https://linktr.ee/tedxcusat' className='underline font-bold'>https://linktr.ee/tedxcusat</a>
                            </p>
                            <p className='text-sm md:text-lg'>
                                We appreciate your enthusiasm and participation. Don’t forget to check out more exciting events and offers coming your way.
                                Feel free to contact us if you have any questions or need further assistance.
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
