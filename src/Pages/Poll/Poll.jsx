import React from 'react';
import { Link } from 'react-router-dom';
import './Poll.css';
import Navbar from '../../Components/Navbar';

const PollTable = () => {
  const pollsData = [
    { id: 1, pollName: 'Poll 1', status: 'ongoing' },
    { id: 2, pollName: 'Poll 2', status: 'ended' },
    { id: 3, pollName: 'Poll 3', status: 'scheduled' },
    { id: 4, pollName: 'Poll 4', status: 'ongoing' },
    { id: 5, pollName: 'Poll 5', status: 'ended' },
  ];

  const getStatusRedirect = (status) => {
    switch (status) {
      case 'ongoing':
        return '/votscreen';
      case 'ended':
        return '/result';
      case 'scheduled':
        return '/notice';
      default:
        return '/';
    }
  };

  return (
    <div>
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
                  <Link to={getStatusRedirect(poll.status)}>
                    <button className="go-to-poll-button">Go to Poll</button>
                  </Link>
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
