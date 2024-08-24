"use client"
import React, { useEffect, useState } from 'react';
import copy from '../../../assets/img/copy.svg';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

const data = [
    {
        "slug": "vibrant-pattern",
        "code": "COLORSHIFT"
    },
    {
        "slug": "dynamic-reflection",
        "code": "MIRRORMAGIC"
    },
    {
        "slug": "prism-spectacle",
        "code": "RAINBOWFLUX"
    },
    {
        "slug": "infinite-design",
        "code": "FRACTALIZE"
    },
    {
        "slug": "kaleido-dream",
        "code": "SPECTRAVIEW"
    }
];

const Page = () => {
    const [code, setCode] = useState('');
    const [isSlugChecked, setIsSlugChecked] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const slug = window.location.href.split('/').pop().toLowerCase();
        if (slug) {
            const found = data.find(item => item.slug === slug);
            if (found) {
                setCode(found.code);
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

    return (
        <>
            <div className='flex flex-col p-[8%] w-full gap-4 font-avenue'>
                {!isSlugChecked ? null : (
                    code === '' ? (
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
                            <p className='text-xl md:text-3xl'>
                                Your Redeem Code: <span className='font-bold'>{code}</span>
                                <Image src={copy} alt='copy' className='w-4 h-4 inline-block ml-2' onClick={popUp} />
                            </p>
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
                {isCopied && (
                    <div className='fixed z-10 bottom-5 bg-white p-4 rounded-lg left-[50%] -translate-x-[50%] w-3/5'>
                        <p className='text-tedRed text-sm md:text-lg font-bold text-center'>
                            Code copied to clipboard! ✓
                        </p>
                    </div>
                )

                }
            </div>
            <Footer />
        </>
    );
};

export default Page;
