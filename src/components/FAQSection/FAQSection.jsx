import React, { useState } from 'react';

const faqData = [
	{
		question: "How can I find out more about the speakers or the event schedule?",
		answer: "You can visit the TEDxCUSAT website or follow our social media channels for updates on the event schedule and speaker lineup."
	},
	{
		question: "Is there a limit to the number of tickets I can buy?",
		answer: "Yes, you can purchase up to 1 ticket per transaction. If you need more, you can make another purchase."

	},
	{
		question: "When will I receive my ticket??",
		answer: "Once payment is completed, your e-ticket will be sent to your registered email within 1-2 days. Please check your spam/junk folder."

	},
	{
		question: "Who can I contact for ticket-related issues?",
		answer: "For any ticket-related inquiries, message or call Dhanush - +91 97465 30193 "

	},
	{
		question: "What do I need to bring to the event ?",
		answer: "Bring a digital or printed copy of your e-ticket and Cusat ID if you have a student ticket. (For first year students, ID pdf is also preferred)."
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
		<p className='text-xl md:text-3xl tracking-wider font-medium  flex justify-between items-center py-2 cursor-pointer transition-all' onClick={handleToggle} >
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
			<div className='faq-ans font-medium text-lg md:text-2xl mb-5'>
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