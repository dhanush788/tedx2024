import './Marquee.css'
import mqImg from "../../assets/img/marquee.svg"
import Image from 'next/image';

const Marquee = ({addBorder=false}) => {
	return (
		<div className={"marquee " + (addBorder ? "border-2 border-black rounded-15" : "")}>
			<div className="marquee-img flex">
				<Image src={mqImg} alt='marquee' className='h-6 md:h-auto'/><Image src={mqImg} alt='marquee' className='ml-6 h-6 md:h-auto'/>
			</div>
		</div>
	);
}

export default Marquee;