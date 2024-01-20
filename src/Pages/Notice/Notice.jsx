import React from 'react';
import './Notice.css'; 
import img from '../../Assets/Images/mega.png'
import Navbar from '../../Components/Navbar';

const ElectionNotice = () => {
  // Replace this with the actual date of the election
  const electionDate = '2024-08-15';

  return (
    <>
    <Navbar/>
    <div className="election-notice-container">
      <div className="left-side">
        <img src={img} alt="Election" className="election-image" />
      </div>
      <div className="right-side">
        <h2>Election Notice</h2>
        <p>The election will be held on {electionDate}.</p>
      </div>
    </div>
    </>
  );
};

export default ElectionNotice;
