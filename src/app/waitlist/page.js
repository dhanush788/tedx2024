"use client"
import FAQSection from '@/components/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Headers/Header';
import Sponsors from '@/components/Sponsors/Sponsors';
import { useState } from 'react';


const InfoparkMessage = `The regular tickets for TEDXCUSAT 2024 can now be purchased 
for 1000 rupees.These tickets grant access to a full day of inspiring talks from a 
diverse lineup of speakers, along with networking opportunities, event materials, 
and complimentary refreshments, including  hamburgers and other delectable treats. 
Open to students, professionals, and anyone passionate about innovation, this event 
is expected to sell out quickly. Secure your spot now before tickets run out!`

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
		<p className='text-lg mt-5 tracking-wider mb-10'>{popupMessage}</p>
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
		<main className='mb-5 our-journey p-custom font-thunder font-bold '>
			<div className='mt-[8vh]'></div>
			<Sponsors />
			<div className='get-tickets mt-[10vh]'>
				<p className='md:text-6xl text-5xl text-left leading-none'>Get a Chance to Win <br /><span className='text-tedRed'>TEDx</span>CUSAT'24 Ticket</p>
				<div className='flex flex-col md:flex-wrap items-center gap-10 md:flex-row justify-start py-5'>
					<TicketCard popupTitleSetter={setPopupTitle} popupMessageSetter={() => setPopupMessage(InfoparkMessage)} popupHandler={setShowPopup} redirect="/waitlist/book" price="700" type="TEDxCUSAT'24 TICKET" popupMessage={InfoparkMessage} />
				</div>
			</div>
			<FAQSection />
		</main>
		<hr className='border-t border-black' />
		<Footer />
		{showPopup ? (
			<div className="absolute top-0 left-0 z-[9999] w-[100vw] h-[100vw]">
				<div
					className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-md:m-2"
				>
					<div className="relative w-auto my-6 mx-auto max-w-3xl">
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
								<h3 className="text-4xl font-thunder ">
									{popupTitle}
								</h3>
								<button
									className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
									onClick={() => setShowPopup(false)}
								>
									<span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
										×
									</span>
								</button>
							</div>
							<div className="relative p-6 flex-auto">
								<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
									{popupMessage}
								</p>
							</div>
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								<button
									className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={() => setShowPopup(false)}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			</div>
		) : null}
	</>
	)
}

export default page