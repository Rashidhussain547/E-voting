// VoteScreen.jsx
import React, { useState } from 'react';
import {  Navigate } from 'react-router-dom';
import './Votescreen.css';
import Navbar from '../../Components/Navbar';

const VoteScreen = () => {
  
  const NIC = localStorage.getItem("nicnumber")
  
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'Imran Khan',
      party: 'Pakistan Tehreek-e-Insaf',
      partyIcon: 'images/ptibat.png',
      image: 'images/pti.webp',
      votes: 0,
    },
    {
      id: 2,
      name: 'Shebaz sharif',
      party: 'PML N',
      partyIcon: 'images/pmlntig.png',
      image: 'images/pmln.jpg',
      votes: 0,
    },
    // Add more candidates as needed
  ]);

  const handleVote = (id) => {
    const updatedCandidates = candidates.map((candidate) =>
      candidate.id === id ? { ...candidate, votes: candidate.votes + 1 } : candidate
    );
    setCandidates(updatedCandidates);
  };

  return (
    <div className="App">
      {!NIC && (
          <Navigate to="/" replace={true} />
        )}
      
      <div className="candidates-row">
        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <div className="candidate-card" key={candidate.id}>
              <img src={candidate.image} alt={candidate.name} className="candidate-image" />
              <h3>{candidate.name}</h3>
              <p>{candidate.party}</p>
              <img src={candidate.partyIcon} alt={`Party Icon ${candidate.party}`} className="party-icon" />
              <div className="vote-button-container">
                <button onClick={() => handleVote(candidate.id)}>Vote</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoteScreen;
