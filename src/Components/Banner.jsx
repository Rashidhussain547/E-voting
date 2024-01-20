import React from 'react';
import img1 from '../Assets/Images/banner.jpg'
import './Banner.css'

const StaticBanner = () => {
  return (
    <div className="static-banner">
      <img src={img1}alt="Banner 1" />
    </div>
  );
};

export default StaticBanner;
