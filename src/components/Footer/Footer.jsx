import './Footer.css'
import Marquee from '../Marquee/Marquee';
import '../../components/utils/resizable.css'
const Footer = () => {
	return (
		<footer>
			<div className="md:px-[8%]  mb-10">
				<div className="marq-ticket border border-black p-2 md:rounded-15 relative min-w-max">
					<Marquee />
					<button className='absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button>
				</div>
				<div className='rounded-15'>
					<iframe
						src="https://www.google.com/maps/embed?iwloc=near&pb=!1m18!1m12!1m3!1d3928.671867055204!2d76.32233327478488!3d10.043912572278078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d223eeb1de1%3A0xce06a9f0d256857a!2sSeminar%20Complex%2C%20CUSAT!5e0!3m2!1sen!2sin!4v1722164451953!5m2!1sen!2sin&zoom=15&center=10.043912572278078,76.32233327478488&maptype=satellite&disableDefaultUI=true&zoomControl=false&scaleControl=false&streetViewControl=false&fullscreenControl=false&mapTypeControl=false&scrollwheel=false&gestureHandling=none"
						style={{ border: "15px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-15 p-5 border-2 border-black w-full md:w-1/4 h-96'></iframe>
				</div>
			</div>
		</footer>
	);
}

export default Footer;