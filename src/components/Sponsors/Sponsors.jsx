import Image from "next/image";
import infopark from "@/assets/img/sponsers/infoparkLogo.svg";
const Sponsors = () => {
	return <>
		<p className='font-thunder font-bold md:text-6xl text-5xl leading-snug text-center'><span className='text-tedRed'>TITLE</span> SPONSOR</p>
		<div className="flex flex-col gap-5 sm:flex-row justify-around mt-5">
			<div className="flex flex-col  items-center">
				<a href="https://infopark.in/">
					<Image src={infopark} className="w-[50vw] sm:w-[25vw] h-auto" />
				</a>
			</div>
		</div>
	</>
}

export default Sponsors;