"use client"
import FAQSection from '@/components/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Headers/Header';
import Sponsors from '@/components/Sponsors/Sponsors';
import { useState } from 'react';



const InfoparkMessage = [
	"TEDxCUSAT 2024 presents a distinguished day designed for intellectual and professional advancement.",
	"Experience insights from 7 distinguished speakers representing diverse fields and expertise",
	"Engage in curated networking opportunities with peers and industry leaders",
	"Each ticket includes:",
	"Comprehensive access to all sessions and talks",
	"A gourmet lunch and a selection of refreshments throughout the day",
	"A sophisticated event hamper featuring keepsakes and essential materials",
	"Venue: Athulya Hall, Infopark, Kochi",
	"Date: 28th September 2024",
	"Join us for a remarkable day of inspiration and enrichment tailored just for you."
]

const TicketCard = ({
	type,
	redirect,
	popupHandler,
	popupMessageSetter,
	popupTitleSetter,
	popupMessage,
}) => {
	function showPopup() {
		popupHandler(true);
		popupMessageSetter();
		popupTitleSetter(type);
	}
	return <div className='text-left w-[90vw] md:w-[35vw] border-black border rounded-[8px] px-4 py-7 bg-white'>
		<p className='text-3xl text-tedRed text-left'>{type}</p>
		<p className='text-base md:text-lg mb-10'>
			{popupMessage.map((item, index) =>
				<span key={index} className='block'>
					<span className={`text-tedRed mr-2 ${(index === 0 || index == popupMessage.length - 1 ) ? 'hidden' : ''}`}>•</span>
					{item}
				</span>
			)}
		</p>
		<div className='flex items-center gap-5'>
			<a href={redirect}>
				<button className="flex hover:bg-black border border-black text-white p-3 pt-4 rounded gap-3 items-center bg-tedRed transform duration-75">
					<span className="text-xl leading-5">TICKETS</span>
					<span className="btn__svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.85 24.85"
							style={{ transform: "translate(0px)", opacity: 1, height: "20px", width: "20px", strokeWidth: 2 }}>
							<g id="Calque_1-2" data-name="Calque 1">
								<line style={{ fill: "none", stroke: "#fff", strokeMiterlimit: 10 }} x1="0.35" y1="24.5" x2="24.35" y2="0.5"></line>
								<polyline style={{ fill: "none", stroke: "#fff", strokeMiterlimit: 10 }} points="24.35 24.4 24.35 0.5 0.46 0.5"></polyline>
							</g>
						</svg>
					</span>
				</button>
			</a>
		</div>
	</div>
}
const page = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [popupTitle, setPopupTitle] = useState("");
	const [popupMessage, setPopupMessage] = useState("");
	return (<>
		<div className='bg-white'>
			<Header />
		</div>
		<hr className='border-t border-black' />
		<main className='mb-5 our-journey p-custom font-thunder tracking-widest font-bold '>
			<div className='mt-[8vh]'></div>
			<Sponsors />
			<div className='get-tickets mt-[10vh]'>
				<p className='md:text-6xl text-5xl text-left leading-none'>Get Your <br /><span className='text-tedRed'>TEDx</span>CUSAT'24 Ticket</p>
				<div className='flex flex-col md:flex-wrap items-center gap-10 md:flex-row justify-start py-5'>
					<TicketCard popupTitleSetter={setPopupTitle} popupMessageSetter={() => setPopupMessage(InfoparkMessage)} popupHandler={setShowPopup} redirect="/waitlist/book" price="700" type="TEDxCUSAT'24 TICKET" popupMessage={InfoparkMessage} />
				</div>
			</div>
		</main>
		<hr className='border-t border-black' />
		<Footer />
	</>
	)
}

export default page