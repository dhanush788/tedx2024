import './Footer.css'
import Marquee from '../Marquee/Marquee';
import '../../components/utils/resizable.css'
import Image from 'next/image';
import facebook from '../../assets/img/facebook.svg';
import insagram from '../../assets/img/instagram.svg';

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col gap-5 py-5 ">
				<div className="md:mx-[8%] marq-ticket border border-black py-2 md:rounded-15 relative min-w-max">
					<Marquee />
					<button className='absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button>
				</div>
				<div className='flex flex-col md:flex-row gap-3 md:gap-10 p-custom'>
					<div className='rounded-15 overflow-hidden flex-1 md:order-1 order-2'>
						<iframe
							src="https://www.google.com/maps/embed?iwloc=near&pb=!1m18!1m12!1m3!1d3928.671867055204!2d76.32233327478488!3d10.043912572278078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d223eeb1de1%3A0xce06a9f0d256857a!2sSeminar%20Complex%2C%20CUSAT!5e0!3m2!1sen!2sin!4v1722164451953!5m2!1sen!2sin&zoom=15&center=10.043912572278078,76.32233327478488&maptype=satellite&disableDefaultUI=true&zoomControl=false&scaleControl=false&streetViewControl=false&fullscreenControl=false&mapTypeControl=false&scrollwheel=false&gestureHandling=none"
							style={{ border: "15px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-15 border-2 border-black w-full h-96'></iframe>
					</div>
					<div className='flex flex-col items-center py-5 flex-1 md:order-2 order-1'>
						<p className='text-3xl font-semibold font-thunder !leading-none'>Contact <span className='text-[#EB0028]'>US</span></p>
						<div className='grid grid-cols-2 w-full py-5'>
							<div className='flex flex-col gap-2 col-span-1'>
								<p className='font-Helvetica text-sm'>IVINE JOJU</p>
								<p className='font-Helvetica text-sm'>Organizer TEDxCUSAT 2024</p>
								<p className='font-Helvetica text-sm'>phone number</p>
							</div>
							<div className='flex flex-col gap-2 col-span-1 '>
								<p className='font-Helvetica text-sm'>AKSHAY</p>
								<p className='font-Helvetica text-sm'>Organizer TEDxCUSAT 2024</p>
								<p className='font-Helvetica text-sm'>phone number</p>
							</div>
						</div>
						<a href='mailto:organizertedxcusat.in'>
							<div className='flex bg-[#EB0028] py-4 px-9 rounded-2xl text-white font-avenue md:text-2xl'>organizer@tedxcusat.in</div>
						</a>
					</div>
					<div className='grid grid-cols-2 flex-1 order-3'>
						<div className='flex flex-col md:justify-start justify-center gap-2'>
							<p className='font-Helvetica text-sm'>About</p>
							<p className='font-Helvetica text-sm'>Theme</p>
							<p className='font-Helvetica text-sm'>Talks and Speakers</p>
							<p className='font-Helvetica text-sm'>Partners</p>
							<p className='font-Helvetica text-sm'>Book TIckets</p>

						</div>
						<div className='flex flex-col items-end gap-4'>
							<div>
								<p className='text-[#EB0028] text-2xl md:text-4xl font-Helvetica font-bold'>TED<sup>x</sup><span className='text-black font-HelveticaLight'>CUSAT</span></p>
								<p className='font-semibold text-[7px] md:text-[10px] -mt-2'><span className='text-[#EB0028]'>&nbsp;x</span>&nbsp;= independently organized event</p>
							</div>
							<div className='flex flex-col items-end'>
								<p className='font-Helvetica text-sm'>FOLLOW US ON</p>
								<div className='flex'>
									<a href='https://facebook.com/tedxcusat21/' target='_blank' rel='noreferrer'>
										<Image src={facebook} alt='facebook' className='w-10 h-10' />
									</a>
									<a href='hhttps://www.instagram.com/tedxcusat' target='_blank' rel='noreferrer'>
										<Image src={insagram} alt='instagram' className='w-10 h-10' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className='w-full top-1/2 bg-black -z-10 h-px border-0' />
			<div className='flex justify-center items-center py-5'>
				<p className='text-lg md:text-2xl font-HelveticaLight font-bold'>© <span className='text-[#EB0028] font-Helvetica'>TED<sup>x</sup></span>CUSAT  2024</p>
			</div>
		</footer>
	);
}

export default Footer;