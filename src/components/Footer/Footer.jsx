import './Footer.css'
import Marquee from '../Marquee/Marquee';
import '../../components/utils/resizable.css'
const Footer = () => {
	return (
		<footer>
			<div className="p-custom">
				<div className="marq-ticket border border-black p-2 rounded-15 relative min-w-max">
					<Marquee />
					<button className='absolute top-0 right-0 h-full rounded-15 uppercase bg-tedRed text-white font-avenue text-3xl px-3 get-ticket'>Get Tickets</button>
				</div>
			</div>
		</footer>
	);
}

export default Footer;