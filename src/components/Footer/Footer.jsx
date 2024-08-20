import './Footer.css'
import Marquee from '../Marquee/Marquee';
import '../../components/utils/resizable.css'
import Image from 'next/image';
import insagram from '../../assets/img/Instagram.png';
import gmail from '../../assets/img/Gmail.png';
import youtube from '../../assets/img/YouTube.png';

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col gap-5 py-5 ">
				<div className="md:mx-[8%] marq-ticket border border-black py-2 md:rounded-15 relative min-w-max bg-white">
					<Marquee />
					{/* <button className='hidden md:block absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button> */}
				</div>
				<div className='flex flex-col md:flex-row gap-3 md:gap-10 p-custom md:items-end'>
					<div className='h-96 rounded-[6px] md:rounded-15 overflow-hidden flex-1 border-2 border-black bg-black text-white p-7 flex flex-col justify-between order-2 md:order-1 hover:scale-105 transform duration-75' id='contact'>
						<p className='text-4xl md:text-5xl font-thunder font-extrabold uppercase tracking-wide '>HAVE ANY QUESTIONS ?</p>
						<p className='text-5xl md:text-6xl font-thunder font-bold tracking-wide'>CONTACT US</p>
						<div>
							<p className='text-xl md:text-2xl font-Helvetica font-bold text-tedRed'>IVINE JOJU</p>
							<p className='text-lg md:text-xl font-Helvetica font-bold'>Organizer, TEDxCUSAT 2024</p>
							<a href='tel:+919895545390' className='text-lg md:text-xl font-Helvetica font-bold'>+91 9895545390</a>
						</div>
						<div>
							<p className='text-xl md:text-2xl font-Helvetica font-bold text-tedRed'>AKSHAY</p>
							<p className='text-lg md:text-xl font-Helvetica font-bold'>Organizer, TEDxCUSAT 2024</p>
							<a href='tel:+917306834384' className='text-lg md:text-xl font-Helvetica font-bold'>+91 7306834384</a>
						</div>
					</div>
					<div className='h-96 rounded-[6px] md:rounded-15 overflow-hidden flex-1 border-2 border-black p-7 bg-white order-3 md:order-2 hover:scale-105 transform duration-75'>
						<p className='text-5xl md:text-7xl font-thunder font-extrabold uppercase tracking-normal '><span className='text-tedRed text-5xl	 md:text-9xl'>Follow</span><br className='hidden md:block' /> Us On</p>
						<div className='flex gap-5 mt-5'>
							<a href='mailto:organizer@tedxcusat.in' target='_blank' rel='noreferrer'>
								<Image src={gmail} alt='facebook' width={50} height={50} />
							</a>
							<a href='https://www.instagram.com/tedxcusat/' target='_blank' rel='noreferrer'>
								<Image src={insagram} alt='instagram' width={50} height={50} />
							</a>
							<a href='https://www.youtube.com/@tedxcusat8428' target='_blank' rel='noreferrer'>
								<Image src={youtube} alt='youtube' width={50} height={50} />
							</a>
						</div>
					</div>
					<div className='rounded-[6px] md:rounded-15 overflow-hidden flex-1 border-2 border-black order-1 md:order-3 hover:scale-105 transform duration-75'>
						<iframe
							src="https://www.google.com/maps/embed?iwloc=near&pb=!1m18!1m12!1m3!1d3928.671867055204!2d76.32233327478488!3d10.043912572278078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d223eeb1de1%3A0xce06a9f0d256857a!2sSeminar%20Complex%2C%20CUSAT!5e0!3m2!1sen!2sin!4v1722164451953!5m2!1sen!2sin&zoom=15&center=10.043912572278078,76.32233327478488&maptype=satellite&disableDefaultUI=true&zoomControl=false&scaleControl=false&streetViewControl=false&fullscreenControl=false&mapTypeControl=false&scrollwheel=false&gestureHandling=none"
							style={{ border: "15px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-15 border-2 border-black w-full h-96'></iframe>
					</div>
				</div>
			</div>
			<hr className='w-full top-1/2 bg-black -z-10 h-px border-0' />
			<div className='flex justify-center items-center py-5 bg-white'>
				<p className='text-lg md:text-2xl font-HelveticaLight font-bold'>© <span className='text-[#EB0028] font-Helvetica'>TED<sup>x</sup></span>CUSAT  2024</p>
			</div>
		</footer>
	);
}

export default Footer;