import React from 'react';
import StaticBanner from '../../Components/Banner';
import Navbar from '../../Components/Navbar';
import Midcomp from '../../Components/Midcomp';
import AboutUs from '../../Components/About';

const Home = () => {
  return (
    <div>
      <Navbar/>  
      <StaticBanner />
      <Midcomp/>
      <AboutUs/>
    </div>
  );
};

export default Home;
