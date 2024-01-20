import React from 'react';
import './Banner.css';
import bannerimg from '../Assets/Images/banner_2.jpg'

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src={bannerimg}
        alt="Banner"
        className="banner-image"
      />
      <div className="banner-text-container">
        <h1 className="animated-text">"Use your vote wisely!"</h1>
        <p className="sub-text">
          Make your decision-making process modern, secure, and effective.
        </p>
      </div>
    </div>
  );
};

export default Banner;
