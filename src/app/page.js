import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import OurJourney from "@/components/OurJourney/OurJourney";
import Filler from "@/components/utils/filler";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
			<Filler />
			<OurJourney/>
			<hr className='w-full top-1/2 bg-black -z-10 h-px border-0 mb-10' />
			<Footer />
			<Filler />
    </main>
  );
}
