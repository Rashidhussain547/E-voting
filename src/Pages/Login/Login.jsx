import React from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar';

const Login = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const nicNumber = e.target.elements.nicNumber.value;

    // Perform validation and login logic here (not implemented in this example).
    // You can use AJAX or other methods to send the NIC number to the server for validation.

    console.log(`Submitted NIC Number: ${nicNumber}`);
  };

  return (
    <div className="Login">
      <Navbar />
      <div className="login-container">
        <form className="login-form" onSubmit={submitForm}>
          <input
            type="text"
            id="nicNumber"
            placeholder="Enter NIC number"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
