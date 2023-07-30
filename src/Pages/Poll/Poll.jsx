import React from 'react';
import './Poll.css';
import Navbar from '../../Components/Navbar';

const PollTable = () => {
  const pollsData = [
    { id: 1, pollName: 'Poll 1', status: 'Open' },
    { id: 2, pollName: 'Poll 2', status: 'Closed' },
    { id: 3, pollName: 'Poll 3', status: 'Open' },
    { id: 4, pollName: 'Poll 1', status: 'Open' },
    { id: 5, pollName: 'Poll 2', status: 'Closed' },
    
  ];

  return (
    <div>
        <Navbar/>
        <div className="poll-table-container">
      <table className="poll-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pollsData.map((poll, index) => (
            <tr key={poll.id}>
              <td>{index + 1}</td>
              <td>{poll.pollName}</td>
              <td>
                <button className="go-to-poll-button">Go to Poll</button>
              </td>
              <td>{poll.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PollTable;
