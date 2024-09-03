"use client"
import FAQSection from '@/components/FAQSection/FAQSection';
import Footer from '@/components/Footer/Footer';
import Marquee from '@/components/Marquee/Marquee';
import Sponsors from '@/components/Sponsors/Sponsors';
import TicketNavbar from '@/components/TicketNavbar/TicketNavbar';
import { useState } from 'react';

const REG_POPUP_MSG = ` always felt like I could do anything. That’s the main
thing people are controlled by! Thoughts- their perception
of themselves! They're slowed down by their perception of
themselves. If you're taught you can’t do anything, you
won’t do anything. I was taught I could do everything.`
const CUSAT_POPUP_MSG = ` always felt like I could do anything. That’s the main
thing people are controlled by! Thoughts- their perception
of themselves! They're slowed down by their perception of
themselves. If you're taught you can’t do anything, you
won’t do anything. I was taught I could do everything.`

const TicketCard = ({
	type,
	price,
	redirect,
	popupHandler,
	popupMessageSetter,
	popupTitleSetter,
}) => {
	function showPopup() {
		popupHandler(true);
		popupMessageSetter();
		popupTitleSetter(type);
	}
	return <div className='text-left w-[90vw] md:w-[35vw] border-black border rounded-[8px] px-4 py-7 hover:scale-105 transform duration-75 overflow-hidden'>
		<p className='text-3xl text-tedRed text-left mb-10'>{type}</p>
		<p className='text-2xl mt-12'>₹{price}</p>

		<a href={redirect}>
			<button className="flex bg-black border border-black text-white p-3 pt-4 rounded-[8px] gap-3 items-center mt-2 hover:bg-tedRed transform duration-75">
				<span className="text-xl leading-5">BUY TICKETS</span>
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

		<p className='text-md mt-5 inline-flex gap-2 cursor-pointer border border-black p-1 rounded' onClick={showPopup}>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
			</span>
			<span>DETAILS</span>
		</p>
	</div>
}
const page = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [popupTitle, setPopupTitle] = useState("");
	const [popupMessage, setPopupMessage] = useState("");
	return (<>
		<TicketNavbar />
		<div className='mt-[18vh]'></div>
		<Marquee addBorder="true" />
		<main className='mb-5 our-journey p-custom font-thunder font-bold '>
			<div className='mt-[8vh]'></div>
			<Sponsors />
			<div className='get-tickets mt-[10vh]'>
				<p className='md:text-6xl text-5xl text-center md:text-left leading-none'>GET YOUR<br /><span className='text-tedRed'>TICKETS</span> NOW</p>
				<div className='ticket-card-container flex flex-col items-center gap-10 md:flex-row justify-start p-5'>
					<TicketCard popupTitleSetter={setPopupTitle} popupMessageSetter={() => setPopupMessage(REG_POPUP_MSG)} popupHandler={setShowPopup} redirect="/ticket/book?type=regular" price="1000" type="REGULAR" />
					<TicketCard popupTitleSetter={setPopupTitle} popupMessageSetter={() => setPopupMessage(CUSAT_POPUP_MSG)} popupHandler={setShowPopup} redirect="/ticket/book?type=cusatian" price="800" type="CUSAT STUDENTS" />
				</div>
			</div>
			<FAQSection />
		</main>
		<Footer />
		{showPopup ? (
			<div className="absolute top-0 left-0 z-[9999] w-[100vw] h-[100vw]">
				<div
					className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-md:m-10"
				>
					<div className="relative w-auto my-6 mx-auto max-w-3xl">
						{/*content*/}
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							{/*header*/}
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
							{/*body*/}
							<div className="relative p-6 flex-auto">
								<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
									{popupMessage}
								</p>
							</div>
							{/*footer*/}
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