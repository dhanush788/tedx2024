"use client";

import Image from "next/image";
import TicketImg from "@/assets/img/ticket.png"
import TEDxLogo from "@/assets/img/logo-black.svg"
import "@/components/utils/resizable.css"
import { useState } from "react";
import Copyright from "@/components/Copyright/Copyright";
import { CheckBox, FoodPref, InputBox } from "@/components/utils/InputComponents";


const page = () => {
	const type = window.location.href.match(/(?<=type\=)[a-z]+/);	
	const [isCusatian, setIsCusatian] = useState(type=="cusatian");
	const goBack = (evt) => {
		evt.preventDefault();
		history.back();
	}
	return <div className="p-custom max-w-8xl font-[montserrat] font-semibold">
		<Image src={TicketImg} />
		<Image src={TEDxLogo} width={100} className="mt-4" />
		<p className="text-4xl uppercase mt-3">Participant Information</p>
		<p className="text-gray-500 text-sm font-medium">Make sure you fill all the necessary details carefully ,once completed no change can be applied.</p>
		<form action="" className="mt-10 mb-14">
			<div className="md:grid items-end md:grid-cols-2">
				<InputBox name="Name" />
				<InputBox name="Email ID" type="email" />
			</div>
			<div className="md:grid items-end md:grid-cols-2">
				<InputBox name="Contact Number" type="phone" />
				<FoodPref />
			</div>
			<div className="md:grid items-end md:grid-cols-2">
				<InputBox name="Registration fee" disabled="true" value={isCusatian ? "₹800" : "₹1000"} />
				<CheckBox name="Are you a Cusatian?" value={isCusatian} onchange={setIsCusatian} />
			</div>

			<div className="font-avenue gap-3 flex w-[100%] justify-center mt-8">
				<button className="border border-black py-1 px-5 rounded-md bg-tedRed text-white">Register</button>
				<button className="border border-black py-1 px-5 rounded-md" onClick={goBack}>Cancel</button>
			</div>
		</form>
		<Copyright />
	</div>
}

export default page;