"use client"
import React, { useState, useEffect, useRef } from 'react';

const data = [{
    heading: "5+",
    sub: "EVENTS"
},
{
    heading: "50+",
    sub: "SPEAKERS"
},
{
    heading: "100+",
    sub: "ACTIVE MEMBERS"
},
{
    heading: "500+",
    sub: "COMMUNITY MEMBERS"
}]

const useCountUp = (end, duration, startCounting) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let start = 0;
        const increment = end / (duration * 1000 / 16); // Assuming 60 FPS, so 16 ms per frame

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [end, duration, startCounting]);

    return count;
};

const Statusbar = () => {
    const [startCounting, setStartCounting] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect(); // Stop observing after the element is in view
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className=' w-full px-[4%] md:px-[8%] my-5 md:my-10'>
            <div className='hidden md:grid grid-cols-4 md:flex-row w-full h-full items-center font-Geist'>
                {data.map((item, i) => {
                    const count = useCountUp(parseInt(item.heading), 2.5, startCounting);
                    return (
                        <div key={i} className='text-center flex flex-col md:gap-2 items-center border-r-[0.1px] md:border-r last:border-r-0 border-black border-opacity-60 md:py-3 h-full'>
                            <p className='font-extrabold md:text-7xl text-2xl leading-snug max-w-lg text-left inter'>
                                {count}+
                            </p>
                            <p className='md:text-2xl text-[8px] font-normal'>{item.sub}</p>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
};

export default Statusbar;