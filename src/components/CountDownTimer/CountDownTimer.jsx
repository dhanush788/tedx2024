'use client';

import React, { useState, useEffect } from 'react';
import './CountDownTimer.css';
import HurryUp from '../HurryUp/HurryUp.jsx';

const CountDownTimer = () => {
  const targetDate = new Date('2024-08-17T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="frame">
        <div className="frame-39">
          <div className="text-wrapper">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="label">DAYS</div>
        </div>
        <div className="frame-40">
          <div className="text-wrapper">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="label">HOURS</div>
        </div>
        <div className="frame-41">
          <div className="text-wrapper">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="label">MINUTES</div>
        </div>
        <div className="frame-42">
          <div className="text-wrapper">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="label">SECONDS</div>
        </div>
        <HurryUp />
      </div>
    </div>
  );
};

export default CountDownTimer;
