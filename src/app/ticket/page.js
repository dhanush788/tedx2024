"use client"
import ContactUs from '@/components/ContactUs/ContactUs';
import Copyright from '@/components/Copyright/Copyright';
import FAQSection from '@/components/FAQSection/FAQSection';
import Marquee from '@/components/Marquee/Marquee';
import Sponsors from '@/components/Sponsors/Sponsors';
import TicketNavbar from '@/components/TicketNavbar/TicketNavbar';

const TicketCard = ({
	type,
	price,
	redirect
}) => {
	return <div className='text-left w-[90vw] md:w-[30vw] border-black border rounded-[8px] px-4 py-7'>
		<p className='text-3xl text-tedRed text-left mb-10'>{type}</p>
		<p className='text-2xl mt-12'>₹{price}</p>

		<a href={redirect}>
			<button className="flex bg-black text-white p-3 pt-4 rounded-[8px] gap-3 items-center mt-2">
				<span class="text-xl leading-5">BUY TICKETS</span>
				<span class="btn__svg">
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

		<p className='text-md mt-5 inline-flex gap-2'>
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
			</span>
			<span>DETAILS</span>
		</p>

	</div>
}
const page = () => {
	return (<>
		<main className='mb-5 our-journey p-custom font-thunder font-bold '>
			<TicketNavbar />
			<div className='mt-[18vh]'></div>
			<Marquee addBorder="true" />
			<div className='mt-[8vh]'></div>
			<Sponsors />
			<div className='get-tickets mt-[10vh]'>
				<p className='md:text-6xl text-4xl leading-snug text-left'>GET YOUR<br /><span className='text-[#EB0028]'>TICKETS</span> NOW</p>

				<div className='ticket-card-container flex flex-col items-center gap-5 md:flex-row justify-around p-10'>
					<TicketCard redirect="/ticket/book?type=regular" price="1000" type="REGULAR" />
					<TicketCard redirect="/ticket/book?type=cusatian" price="800" type="CUSAT STUDENTS" />
				</div>
			</div>
			<FAQSection />
			<ContactUs />
			<Copyright />
		</main>
	</>
	)
}

export default page