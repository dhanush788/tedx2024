"use client"
import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        const slug = window.location.href.split('/').pop();
        if (slug) {
            const found = data.find(item => item.slug === slug);
            if (found) {
                setCode(found.code);
            }
        }
        setIsSlugChecked(true);
    }, []);
    
    return (
        <div className='flex flex-col p-[8%] w-full h-screen gap-4 font-avenue'>
            {!isSlugChecked ? null : (
                code === '' ? (
                    <p className='text-tedRed !font-thunder font-bold text-center text-3xl md:text-5xl'>
                        Invalid QR Code
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
                        </p>
                        <p className='text-sm md:text-lg'>
                            Use this code to claim your prize by sending the code to TEDxCUSAT's official Instagram handle 
                            <a href='https://ig.me/m/tedxcusat' className='text-tedRed'> (@tedxcusat)</a>. 
                            Please note that only the first one to send will receive the reward.
                        </p>
                        <p className='text-lg md:text-2xl'>
                            What’s Next?
                        </p>
                        <p className='text-sm md:text-lg'>
                            To stay updated with all our latest news, upcoming events, and special offers, make sure to visit our Linktree. 
                            We’ve got a range of exciting links and information just for you! 
                            <a href='https://linktr.ee/tedxcusat' className='underline'>https://linktr.ee/tedxcusat</a>
                        </p>
                        <p className='text-sm md:text-lg'>
                            We appreciate your enthusiasm and participation. Don’t forget to check out more exciting events and offers coming your way. 
                            Feel free to contact us if you have any questions or need further assistance.
                        </p>
                        <p className='text-sm md:text-lg'>
                            Email: <a href='mailto:outreach@tedxcusat.in' className='underline'>outreach@tedxcusat.in</a>
                        </p>
                    </>
                )
            )}
        </div>
    );
};

export default Page;
