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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = gsap.utils.toArray("section");
    const isMobile = window.innerWidth < 768;

    const totalHeight = sections.reduce((acc, section) => acc + section.offsetHeight, 0);
    const viewportHeight = window.innerHeight;
    const extraPixels = isMobile ? 130 : 0.2 * viewportHeight;

    const snapPoints = sections.map((section) => (section.offsetTop - extraPixels) / totalHeight);

    gsap.to(sections, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        snap: {
          snapTo: snapPoints,
          duration: { min: 0.2, max: 0.8 },
          ease: "back.out(1)",
        },
      },
    });
  }, []);

  return (
    <main ref={scrollRef} className="bg-opacity-0 bg-contain bg-repeat-y">
      <Navbar />
      <section>
        <div className="bg-white bg-pattern bg-fixed h-screen w-screen flex items-center justify-center">
          <a href="#hero" className="absolute bottom-0 mb-10">
            <Image src={arrowUp} alt="arrow up" className="w-10 h-10 md:w-16 md:h-16" />
          </a>
        </div>
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section>
        <CountDownTimer />
        <About />
      </section>
      <section>
        <Statusbar />
        <Snapshots />
      </section>
      <section>
        <Speakers />
      </section>
      <section>
        <OurJourney />
      </section>
      <Footer />
    </main>
  );
}
