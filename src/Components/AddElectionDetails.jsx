import React, { useState } from 'react';
import './AddElectionDetails.css';


const AddElectionForm = ({ onSaveElection }) => {
  const [electionName, setElectionName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newElection = {
      name: electionName,
      date,
      startTime,
      endTime,
    };
    onSaveElection(newElection);
    // Clear form fields after submission
    setElectionName('');
    setDate('');
    setStartTime('');
    setEndTime('');
  };

  return (
<div>
    <div className="add-election-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Election Name:</label>
          <input
            type="text"
            value={electionName}
            onChange={(e) => setElectionName(e.target.value)}
            required
          />
          <label id='label-date'>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label htmlFor=''>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        {/* <button type="submit">Save</button> */}
      </form>
    </div>
</div>
  );
};

export default AddElectionForm;
