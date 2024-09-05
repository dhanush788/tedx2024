"use client";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import CountDownTimer from "@/components/CountDownTimer/CountDownTimer";
import HurryUp from "@/components/HurryUp/HurryUp";
import OurJourney from "@/components/OurJourney/OurJourney";
import Snapshots from "@/components/Snapshots/Snapshots";
import About from "@/components/About/About";
import Filler from "@/components/utils/filler";
import Statusbar from "@/components/Statusbar/Statusbar";
import Speakers from "@/components/Speakers/Speakers";
import { useEffect, useRef } from "react";
import arrowUp from '../assets/img/arrowUp.svg';
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/TextPlugin';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


export default function Home() {
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    console.log(element)
    gsap.fromTo(
      element,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);


  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const calculateEndValue = () => {
      const heroElement = document.getElementById("hero");
      if (!heroElement) return;

      const heroTop = heroElement.getBoundingClientRect().top + window.scrollY;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      return isMobile
        ? heroTop - 100
        : heroTop - window.innerHeight * 0.2;
    };

    gsap.to(sections, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top top",
        end: calculateEndValue,
        scrub: 0.2,
        snap: {
          snapTo: 1,
          duration: { min: 0.2, max: 0.8 },
          ease: "back.out(1)",
        },
      },
    });
  }, []);

  const handleScrollToHero = (event) => {
    event.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      window.scrollTo({
        top: heroSection.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-opacity-0 bg-contain bg-repeat-y">
      <div className="snapping" ref={scrollRef} >
        <Navbar />
        <section>
          <div className="bg-white bg-pattern bg-fixed h-screen w-screen flex items-center justify-center transition-all duration-1000">
            <div ref={elementRef}>
              <div
                className="flex gap-2 absolute top-[53%] opacity-0 animate-fadeIn left-[10%] md:left-[50%] md:-translate-x-1/2 w-[80%] md:w-auto"
              >
                <>
                  {[...Array(4)].map((_, index) => (
                    <img key={`desktop-${index}`} src="/star.svg" alt="star" className="w-5 -mt-2 hidden md:inline" />
                  ))}
                </>
                <p
                  id="textMorph"
                  ref={textRef}
                  className=" font-thunder uppercase font-bold text-[4.2vw] md:text-[1.8vw] text-center">Celebrating <span className="text-tedRed">5 Years</span> of Ideas Worth Spreading</p>
                <>
                  {[...Array(4)].map((_, index) => (
                    <img key={`desktop-${index}`} src="/star.svg" alt="star" className="w-5 -mt-2 hidden md:inline" />
                  ))}
                </>
              </div>
            <a onClick={handleScrollToHero} className="absolute bottom-0 mb-10">
              <Image src={arrowUp} alt="arrow up" className="w-10 h-10 md:w-16 md:h-16 opacity-0 animate-fadeIn cursor-pointer" />
            </a>
            </div>
          </div>
        </section>
        <section id="hero">
          <Hero />
        </section>
      </div>
      <CountDownTimer />
      <About />
      <Statusbar />
      <Snapshots />
      <Speakers />
      <OurJourney />
      <Footer />
    </main>
  );
}
