import './Footer.css'
import Marquee from '../Marquee/Marquee';
import '../../components/utils/resizable.css'
import Image from 'next/image';
import insagram from '../../assets/img/Instagram.png';
import gmail from '../../assets/img/Gmail.png';
import youtube from '../../assets/img/YouTube.png';
import ContactUs from '../ContactUs/ContactUs';
import Copyright from '../Copyright/Copyright';

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col gap-5 py-5 ">
				<div className="marq-ticket">
					<Marquee />
					{/* <button className='hidden md:block absolute top-0 right-0 h-full rounded-l-lg md:rounded-15 uppercase bg-tedRed text-white font-avenue md:text-3xl px-3 get-ticket'>Get Tickets</button> */}
				</div>
				<div className='p-custom'>
					<ContactUs />
				</div>
			</div>
			<Copyright />
		</footer>
	);
}

export default Footer;