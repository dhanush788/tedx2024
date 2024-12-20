"use client";
import React, { useEffect, useState } from 'react'
import "./TicketNavbar.css";
const TicketNavbar = () => {
	const [expanded, setExpanded] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date());
	const toggleMenu = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		if (expanded) {
			document.body.classList.add('no-scroll');

			const rightCard = document.querySelector('.right-card');
			const leftCards = document.querySelectorAll('.left-card .section-card');

			if (rightCard) {
				rightCard.classList.add('enter');
			}

			if (leftCards.length > 0) {
				leftCards.forEach((card, index) => {
					setTimeout(() => {
						card.classList.add('enter');
					}, index * 250); // Delay between each card's animation
				});
			}
		} else {
			document.body.classList.remove('no-scroll');
			const rightCard = document.querySelector('.right-card');
			const leftCards = document.querySelectorAll('.left-card .section-card');

			if (rightCard) {
				rightCard.classList.remove('enter');
			}

			if (leftCards.length > 0) {
				leftCards.forEach(card => {
					card.classList.remove('enter');
				});
			}
		}
	}, [expanded]);


	const formatDate = (date) => {
		const options = {
			month: '2-digit',
			day: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			hour12: true
		};
		return date.toLocaleString('en-US', options).replace(',', '');
	};
	return (<>
		<header>
			<div className="logo top-0" id='logo'></div>
			<div className="date-time font-avenue">{formatDate(currentDate)}</div>
			<button className="menu" onClick={toggleMenu} aria-expanded={expanded ? 'true' : 'false'}>
				{expanded ? (
					<svg className="close-icon" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M5.636 4.223L19.778 18.365l-1.414 1.414L4.222 5.637z" />
						<path d="M4.222 18.363L18.364 4.22l1.414 1.414L5.636 19.777z" />
					</svg>
				) : (
					<span></span>
				)}
			</button>
		</header>
		{expanded && (
			<div className="menu-panel">
				<div className="left-card">
					<div className="section-card"><a href="/#about">ABOUT</a></div>
					<div className="section-card"><a href="/#speakers">SPEAKERS</a></div>
					<div className="section-card"><a href="/#contact">CONTACT</a></div>
					<a href="https://maps.app.goo.gl/KtVUikNxKibTnU9L6" className="section-card" rel="noreferrer" target="_blank">EVENT MAP</a>
				</div>
				<div className="right-card">
					<div className="text-container">
						<p className="subheading">Join the Conversation</p>
						<h2 className="main-heading">Get Your Ticket Today!</h2>
					</div>
					<a href="/ticket" className="book-ticket">Book Ticket</a>
				</div>
			</div>
		)}
	</>
	);
}

export default TicketNavbar;