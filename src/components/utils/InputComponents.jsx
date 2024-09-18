import { useState } from "react";

export const InputBox = ({
	name,
	displayName,
	type = "text",
	value = "",
	disabled = false,
	onChange
}) => {
	let _n = name.replace(/\s+/, "");
	return (
		<div className="py-3 w-[100%]">
			<label htmlFor={_n} className="text-md uppercase">{displayName}</label><br />
			<input
				type={type}
				required
				value={value}
				disabled={disabled}
				name={_n}
				onChange={onChange}
				className="border-b border-b-gray-700 outline-none text-md w-[100%] h-11 bg-transparent"
			/>
		</div>
	);
};

export const CheckBox = ({
	name,
	value,
	onchange
}) => {
	return <div className="py-3 flex gap-2">
		<label>{name}</label>
		<input type="checkbox" style={{
			width: "18px"
		}} defaultChecked={value} onChange={(e) => onchange(e.target.checked)} className="cursor-pointer" />
	</div>
}

export const FoodPref = ({ name, displayName , value, onChange }) => {
	return (
		<div className="py-3">
			<label className="text-md uppercase">{displayName}</label><br />
			<select
				name={name}
				value={value}
				onChange={onChange}
				className="bg-transparent border-b border-b-gray-700 p-2 w-[100%] cursor-pointer"
			>
				<option value="veg">Vegetarian</option>
				<option value="non-veg">Non-Vegetarian</option>
			</select>
		</div>
	);
};

