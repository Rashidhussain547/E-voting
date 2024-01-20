import React, { useState } from 'react';
import './Candidate.css';
import AddElectionForm from '../../Components/AddElectionDetails';
import CandidateForm from '../../Components/CandidateForm'; // Import the CandidateForm component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar  from '../../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Candidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [numForms, setNumForms] = useState(2); // Track the number of forms to display

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

  const handleAddForm = () => {
    setNumForms(numForms + 1);
  };

  return (
    <div className="App">
      <Navbar/>
      <div className="candidates-row container">
        <AddElectionForm/>
        <div className="candidates-grid row">
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

          {[...Array(numForms)].map((_, index) => (
            <div className="candidate-form col" key={index}>
              <h2>Add New Candidate</h2>
              <CandidateForm onAddCandidate={handleAddCandidate} />
            </div>
          ))}
        </div>
        <div className="add-form-icon" onClick={handleAddForm}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" />
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
