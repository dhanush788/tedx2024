import Image from "next/image";
import infopark from "@/assets/img/sponsers/infoparkLogo.svg";
const Sponsors = () => {
	return <>
		<p className='font-thunder font-bold md:text-6xl text-5xl leading-snug text-center'><span className='text-tedRed'>OUR</span> SPONSORS</p>
		<div className="flex flex-col gap-5 sm:flex-row justify-around mt-5">
			<div className="flex flex-col  items-center">
				<p className="font-thunder font-bold text-3xl md:text-5xl"><span className="text-tedRed">TITLE</span> SPONSOR</p>
				<Image src={infopark} className="w-[50vw] sm:w-[25vw] h-auto" />
			</div>
			{/* <div className="flex flex-col items-center">
				<Image src={SM} className="w-[60vw] sm:w-[25vw] h-auto" />
				<p className="font-thunder font-bold text-xl">GLOBAL PARTNER</p>
			</div> */}
		</div>
	</>
}

export default Sponsors;