import { useState } from "react";

export const InputBox = ({
	name,
	type = "Text",
	value = "",
	disabled = ""
}) => {
	let _n = name.replace(/\s+/, "");
	return <div className="p-3 w-[100%]">
		<label htmlFor={_n} className="text-md uppercase">{name}</label><br />
		<input type={type} required defaultValue={value} disabled={disabled} name={_n} className="border-b border-b-gray-700 outline-none text-md w-[100%] h-11" />
	</div>
}

export const CheckBox = ({
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

export const FoodPref = () => {
	const [click] = useState(false);
	return <div className="p-3">
		<label className="text-md uppercase">Food Preference</label><br />
		<select name="pref" id="pref" className="bg-transparent border-b border-b-gray-700 p-2 w-[100%] cursor-pointer">
			<option value="veg">Vegetarian</option>
			<option value="non-veg">Non-Vegetarian</option>
		</select>
	</div>
}
