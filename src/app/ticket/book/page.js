"use client";

import Image from "next/image";
import TicketImg from "@/assets/img/ticket.png"
import TEDxLogo from "@/assets/img/logo-black.svg"
import "@/components/utils/resizable.css"
import { useState } from "react";
import Copyright from "@/components/Copyright/Copyright";

const InputBox = ({
	name,
	type = "Text",
	value = "",
	disabled = ""
}) => {
	let _n = name.replace(/\s+/, "");
	return <div className="p-3 w-[100%]">
		<label htmlFor={_n} className="text-md uppercase">{name}</label><br />
		<input type={type} required defaultValue={value} disabled={disabled} name={_n} className="border border-black outline-none text-md w-[100%] h-11" />
	</div>
}

const CheckBox = ({
	name,
	value,
	onchange
}) => {
	return <div className="p-3 flex gap-2">
		<label>{name}</label>
		<input type="checkbox" style={{
			width: "18px"
		}} defaultChecked={value} onChange={(e) => onchange(e.target.checked)} className="cursor-pointer" />
	</div>
}

const FoodPref = () => {
	const [click] = useState(false);
	return <div className="p-3">
		<label className="text-md uppercase">Food Preference</label><br />
		<select name="pref" id="pref" className="bg-transparent border-b border-b-gray-700 p-2 w-[100%] cursor-pointer">
			<option value="veg">Vegetarian</option>
			<option value="non-veg">Non-Vegetarian</option>
		</select>
	</div>
}
const page = () => {
	const type = window.location.href.match(/(?<=type\=)[a-z]+/);	
	const [isCusatian, setIsCusatian] = useState(type=="cusatian");
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
				<button className="border border-black py-1 px-5 rounded-md" onClick={() => history.back()}>Cancel</button>
			</div>
		</form>
		<Copyright />
	</div>
}

export default page;