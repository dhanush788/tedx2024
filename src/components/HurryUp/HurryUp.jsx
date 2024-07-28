'use client';
import React, { useEffect, useState } from 'react';
import './HurryUp.css';

const HurryUp = () => {
  const [red, setRed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRed(!red);
    }, 500);
  });
  return (
    <div className="frame-53 !hidden md:!flex">
      <div className="rectangle-23">
        <div className="line-7 transition translate-x-1"></div>
        <div className="rectangle-24">
          <div className={`${!red ? 'red-text' : 'text-black'} hurry-up`}>
            HURRY<span className={`${red ? 'red-text' : 'text-black'} `}>&nbsp;UP!</span>
          </div>
        </div>
        <div className="line-8"></div>
      </div>
    </div>
  );
};

export default HurryUp;
