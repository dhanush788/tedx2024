import Image from "next/image";
import SI from "@/assets/img/sponsers/si-global.png";
import SM from "@/assets/img/sponsers/santa-monica.png";
const Sponsors = () => {
	return <>
		<p className='font-thunder font-bold md:text-6xl text-4xl leading-snug text-center'><span className='text-[#EB0028]'>OUR</span> SPONSORS</p>
		<div className="flex flex-col sm:flex-row justify-around mt-10">
			<div className="flex flex-col items-center">
				<Image src={SI} className="w-[70vw] sm:w-[25vw] h-auto" />
				<p className="font-thunder font-bold text-xl">GLOBAL PARTNER</p>
			</div>
			<div className="flex flex-col items-center">
				<Image src={SM} className="w-[70vw] sm:w-[25vw] h-auto" />
				<p className="font-thunder font-bold text-xl">GLOBAL PARTNER</p>
			</div>
		</div>
	</>
}

export default Sponsors;