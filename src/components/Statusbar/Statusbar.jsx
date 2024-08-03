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
        <div ref={ref} className='py-7 md:py-20 w-full'>
            <div className='px-2 md:px-[20vw] grid grid-cols-2 md:grid-cols-4 md:flex-row w-full h-full items-center   py-10 md:py-16 gap-4 md:gap-0'>
                {
                    data.map((item, i) => {
                        const count = useCountUp(parseInt(item.heading), 2.5, startCounting); // 2.5 seconds duration

                        return (
                            <div key={i} className='text-center flex flex-col gap-2 items-center'>
                                <p className='font-semibold md:text-5xl text-2xl leading-snug max-w-lg text-left inter'>
                                    {count}+
                                </p>
                                <p className='md:text-xl text-base font-normal'>{item.sub}</p>
                            </div>
                        );
                    })
                }        
            </div>
        </div>
    );
};

export default Statusbar;