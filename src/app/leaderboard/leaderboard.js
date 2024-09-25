"use client"
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './leaderboard.css';

const Leaderboard = () => {
  const [topContributors, setTopContributors] = useState([]);
  const [allContributors, setAllContributors] = useState([]);

  // Load CSV file and parse it
  useEffect(() => {
    Papa.parse('/leaderboard1.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        const top = data.slice(0, 3); // Top 3 contributors
        setTopContributors(top);
        setAllContributors(data);
        console.log(data)
      },
    });
  }, []);

  return (
    <div className="leaderboard-container">
      {/* Leaderboard Heading */}
      <h1 className="leaderboard-heading">LEADERBOARD</h1>

      {/* Top Contributors Section */}
      <div className="top-contributors">
        <h2 className="section-heading">TOP CONTRIBUTORS</h2>
        <div className="top-list">
          {topContributors.map((contributor, index) => (
            <div className={`contributor-card rank-${index + 1}`} key={index}>
              <span className="rank">{contributor.Rank < 10 ? `0${contributor.Rank}` : contributor.Rank}</span>
              <span className="name">{contributor.NAME}</span>
              <span className="score">{contributor.Score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Contributors Section */}
      <div className="all-contributors">
        <h2 className="section-heading">ALL CONTRIBUTORS</h2>
        <div className="contributors-grid">
          {/* Header Row */}
          <div className="cell cell-header">RANK</div>
          <div className="cell cell-header">NAME</div>
          <div className="cell cell-header">SCORE</div>

          {/* Individual Contributor Cells */}
          {allContributors.map((contributor, index) => (
            <React.Fragment key={index}>
              <div className="cell">{index+1}</div>
              <div className="cell">{contributor.NAME}</div>
              <div className="cell">{contributor.Score}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
