import './Marquee.css'
import mqImg from "../../assets/img/marquee.svg"
import Image from 'next/image';

const Marquee = () => {
	return (
		<div className="py-2 md:mx-[8%] border border-black md:rounded-[15px] min-w-max">
			<div className="marquee">
				<div className="marquee-img flex">
					<Image src={mqImg} className='h-6 md:h-auto' /><Image src={mqImg} className='ml-6 h-6 md:h-auto' />
				</div>
			</div>
		</div>
	);
}

export default Marquee;