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
import { useRef } from "react";

export default function Home() {

  const scrollref = useRef(null);
  return (
    <main className="bg-opacity-0 bg-contain bg-repeat-y">
      <Navbar />
      <div className="bg-white h-screen w-screen flex items-center justify-center"></div>
      <Hero />
      <CountDownTimer useRef={scrollref} />
      <About />
      <Statusbar />
      <Snapshots />
      <Speakers />
      <OurJourney />
      <Footer />
    </main>
  );
}
