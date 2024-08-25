'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const updateTimestamp = () => {
            setCurrentDate(new Date());
        };

        updateTimestamp();
        const interval = setInterval(updateTimestamp, 60000);

        return () => clearInterval(interval);
    }, []);

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

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

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

    const handleScroll = (destination) => {
        const heroSection = document.getElementById(destination);
        if (heroSection) {
            window.scrollTo({
                top: heroSection.offsetTop - 150,
                behavior: "smooth",
            });
        }
        else {
            window.location.href = '/';
        }
        toggleMenu();
    };

    return (
        <>
            <header>
                <a href="/" className="logo" id='logo'></a>
                <div className="date-time">{formatDate(currentDate)}</div>
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
                        <div className="section-card" onClick={() => handleScroll("about")}>ABOUT</div>
                        <div className="section-card" onClick={() => handleScroll("speakers")}>SPEAKERS</div>
                        <div className="section-card" onClick={() => handleScroll("contact")}>CONTACT</div>
                        <a href="https://www.google.com/maps?ll=10.043907,76.324908&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=14845740073459549562" className="section-card" rel="noreferrer" target="_blank">EVENT MAP</a>
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
};

export default Header;