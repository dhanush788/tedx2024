'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
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
    const isMobile = window.innerWidth < 768;
    const tl = gsap.timeline();

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = 'hidden';
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
    }).then(() => {
      document.body.style.overflow = '';
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
    toggleMenu();
  };

  return (
    <>
      <header>
        <div className="logo" id='logo'></div>
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
            {/* <div className="section-card" onClick={() => handleScroll("about")}>ABOUT</div> */}
            <div className="section-card" onClick={() => handleScroll("speakers")}>SPEAKERS</div>
            <div className="section-card" onClick={() => handleScroll("contact")}>CONTACT</div>
            <a href='/team' className="section-card">TEAM</a>
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
};

export default Navbar;