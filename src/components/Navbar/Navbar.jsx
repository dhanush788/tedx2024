'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const tl = gsap.timeline();

    tl.fromTo('.logo', {
      top: '50vh',
      opacity: 0,
      yPercent: 50,
    }, {
      top: '50vh',
      yPercent: -50,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    }).to('.logo', {
      top: '45vh',
      duration: 1,
      ease: 'power3.out',
    });


    // Scroll-based animation for the logo and other elements
    let logoTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: () => window.innerHeight * 1,
        scrub: 0.6,
      }
    });

    logoTl.fromTo('.logo', {
      top: '45vh',
      yPercent: -50,
      transformOrigin: 'center center',
      scale: isMobile ? 1.5 : 2,
      textShadow: '0 0 2px rgba(0,0,0,0.3)',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }, {
      top: isMobile ? '3vh' : '1.5vh',
      yPercent: 0,
      scale: 1,
      textShadow: '0 0 2px rgba(0,0,0,0)',
      duration: 0.8,
      left: isMobile ? '8%' : '50%',
      transform: isMobile ? 'translate(0%, 0%)' : 'translate(-50%, 0%)',
    });

    // Animation for date-time and menu button to fade in
    logoTl.fromTo('.date-time, .menu', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.3,
    }, "-=0.8"); // Start animation just before the logo animation ends

    // Toggle the header box-shadow
    logoTl.fromTo('header', {
      boxShadow: '0px 0px 10px rgba(0,0,0,0)',
      backgroundColor: 'rgba(255,255,255,0)',
    }, {
      boxShadow: '0px 0px 10px rgba(0,0,0,0.15)',
      duration: 0.2,
      backgroundColor: 'rgba(255,255,255,1)',
    }, 0.5);
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

  const currentDate = new Date();

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

  return (
    <>
      <header>
        <div className="logo"></div>
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
            <a href="#events" className="section-card" onClick={toggleMenu}>EVENTS</a>
            <a href="#workshop" className="section-card" onClick={toggleMenu}>WORKSHOP</a>
            <a href="#contact" className="section-card" onClick={toggleMenu}>CONTACT</a>
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1NEV2b72eeJaskro_FazhplLTLhJgKHU&usp=sharing" className="section-card" rel="noreferrer" target="_blank">EVENT MAP</a>
          </div>
          <div className="right-card">
            <div className="text-container">
              <p className="subheading">Got An Idea?</p>
              <h2 className="main-heading">Let's turn your idea into reality</h2>
            </div>
            <a href="/book" className="book-ticket">Book Ticket</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;