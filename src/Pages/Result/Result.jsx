import React from 'react';
import './Result.css';

const ElectionResults = ({ results }) => {
  return (
    <div className="election-results">
      <h2>Election Results</h2>
      <div className="candidate-list">
        {results && results.map((candidate) => (
          <div className="candidate-card" key={candidate.id}>
            <img src={candidate.image} alt={candidate.name} className="candidate-image" />
            <div className="candidate-name">{candidate.name}</div>
            <div className="vote-count">
              <div className="vote-circle">
                <span className="vote-number">{candidate.votes}</span>
              </div>
              <div className="vote-label">Votes</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectionResults;