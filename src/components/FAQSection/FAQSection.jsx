import React, { useState } from 'react';

const FAQItem = ({
	q,
	ans = ""
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};
	return <div className='m-1 mb-5'>
		<p className='text-2xl uppercase flex justify-between items-center p-2 cursor-pointer hover:bg-gray-200 transition-all' onClick={handleToggle} >
			<span>{q}</span>
			<span>
				{
					isExpanded ?
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13H5v-2h14v2z" /></svg>
						: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
				}

			</span>
		</p>
		{isExpanded ?
			<div className='faq-ans font-medium text-xl mb-5'>
				{ans}
			</div> : ""
		}
		<hr style={{ height: "2px", backgroundColor: "#000" }} />
	</div>
}
function FAQSection() {
	return (
		<div className="p-4 rounded-lg">
			<p className='text-5xl'>FAQ</p>
			<FAQItem q="can we get exchange or refund" ans="
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores nostrum commodi id cum sed laudantium, perspiciatis itaque numquam? Asperiores enim hic doloremque aliquid et repellat, rem voluptate velit vitae." />
			<FAQItem q="is there minimum age limit" />
			<FAQItem q="can we get exchange or refund" />
			<FAQItem q="is there minimum age limit" />
			<FAQItem q="can we get exchange or refund" />
		</div>
	);
}

export default FAQSection;