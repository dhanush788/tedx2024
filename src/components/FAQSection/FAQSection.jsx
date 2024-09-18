import React, { useState } from 'react';

const faqData = [
	{
		question: "Can we get exchange or refund?",
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores nostrum commodi id cum sed laudantium, perspiciatis itaque numquam? Asperiores enim hic doloremque aliquid et repellat, rem voluptate velit vitae."
	},
	{
		question: "Is there a minimum age limit?",
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores nostrum commodi id cum sed laudantium, perspiciatis itaque numquam? Asperiores enim hic doloremque aliquid et repellat, rem voluptate velit vitae."

	},
	{
		question: "Can we get exchange or refund?",
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores nostrum commodi id cum sed laudantium, perspiciatis itaque numquam? Asperiores enim hic doloremque aliquid et repellat, rem voluptate velit vitae."

	},
	{
		question: "Is there a minimum age limit?",
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores nostrum commodi id cum sed laudantium, perspiciatis itaque numquam? Asperiores enim hic doloremque aliquid et repellat, rem voluptate velit vitae."

	},
	{
		question: "Can we get exchange or refund?",
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta maiores nostrum commodi id cum sed laudantium, perspiciatis itaque numquam? Asperiores enim hic doloremque aliquid et repellat, rem voluptate velit vitae."

	}
]

const FAQItem = ({
	q,
	ans = ""
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};
	return <div className='mb-5'>
		<p className='text-3xl tracking-wider font-medium uppercase flex justify-between items-center py-2 cursor-pointer transition-all' onClick={handleToggle} >
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
			<div className='faq-ans font-medium text-2xl mb-5'>
				{ans}
			</div> : ""
		}
		<hr style={{ height: "1.5px", backgroundColor: "#000" }} />
	</div>
}
function FAQSection() {
	return (
		<div className="py-20 rounded-lg">
			<p className='text-5xl pb-5 uppercase tracking-wide'>Frequently Asked <br /><span className='text-tedRed'>Questions</span></p>
			{faqData.map((faq, index) => (
				<FAQItem key={index} q={faq.question} ans={faq.answer} />
			))}
		</div>
	);
}

export default FAQSection;