import React from 'react';
import './Adminlogin.css';
import Navbar from '../../Components/Navbar';

const Adminlogin = () => {
  

  return (
    <div className="Login">
      <div className="login-container">
        <form className="login-form">
          <input
            type="text"
            id="userName"
            placeholder="Enter User name"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
