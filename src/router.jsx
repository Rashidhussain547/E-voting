import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import VoteScreen from './Pages/Votescreen/Votescreen';
import Navbar from './Components/Navbar';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  

  let nic = localStorage.getItem('nicnumber');

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/VoteScreen" element={<VoteScreen />} />
      </Routes>
    </>
  );
};

export default AppRouter;


