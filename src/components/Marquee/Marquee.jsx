import './Marquee.css'
import mqImg from "../../assets/img/marquee.svg"
import Image from 'next/image';

const Marquee = () => {
	return (
		<div className="marquee">
			<div className="marquee-img flex">
				<Image src={mqImg}/><Image src={mqImg} className='ml-6'/>
			</div>
		</div>
	);
}

export default Marquee;