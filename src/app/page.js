import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import CountDownTimer from "@/components/CountDownTimer/CountDownTimer";
import HurryUp from "@/components/HurryUp/HurryUp";
import OurJourney from "@/components/OurJourney/OurJourney";
import Snapshots from "@/components/Snapshots/Snapshots";
import About from "@/components/About/About";
import Filler from "@/components/utils/filler";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CountDownTimer />
      <About />
      <Snapshots />
      <OurJourney />
      <Footer />
      <Filler />
    </main>
  );
}
