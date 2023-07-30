import React, { useState } from 'react';
import './Candidate.css';
import Navbar from '../../Components/Navbar';
import CandidateForm from '../../Components/CandidateForm'; // Import the CandidateForm component

const Candidate = () => {
  const [candidates, setCandidates] = useState([
    
  ]);

  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  const handleDeleteCandidate = (id) => {
    const updatedCandidates = candidates.filter((candidate) => candidate.id !== id);
    setCandidates(updatedCandidates);
  };

  const handleCandidateChange = (event, id, field) => {
    const updatedCandidates = candidates.map((candidate) => {
      if (candidate.id === id) {
        return { ...candidate, [field]: event.target.value };
      }
      return candidate;
    });

    setCandidates(updatedCandidates);
  };

  const handleSaveCandidates = () => {
    console.log('Candidates:', candidates);
    alert('Candidates saved successfully!');
  };

  return (
    <div className="App">
      <Navbar />
      <div className="candidates-row">
        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <div className="candidate-card" key={candidate.id}>
              <img
                src={candidate.image}
                alt={candidate.name}
                type="file"
                className="candidate-image"
              />
              <input
                type="text"
                value={candidate.name}
                onChange={(event) => handleCandidateChange(event, candidate.id, 'name')}
                placeholder="Candidate Name"
              />
              <input
                type="text"
                value={candidate.party}
                onChange={(event) => handleCandidateChange(event, candidate.id, 'party')}
                placeholder="Party Name"
              />
              <img
                src={candidate.partyIcon}
                alt={`Party Icon ${candidate.party}`}
                className="party-icon"
              />
              <div className="delete-icon" onClick={() => handleDeleteCandidate(candidate.id)}>
                &#x2715;
              </div>
            </div>
          ))}
          <div className="candidate-form">
            <h2>Add New Candidate</h2>
            <CandidateForm onAddCandidate={handleAddCandidate} />
          </div>

          <div className="candidate-form">
            <h2>Add New Candidate</h2>
            <CandidateForm onAddCandidate={handleAddCandidate} />
          </div>
        </div>

        <div className="save-button-container">
          <button className="save-button" onClick={handleSaveCandidates}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
