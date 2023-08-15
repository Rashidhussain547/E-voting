import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="navbar">
      <h1 className="navbar-heading">E Voting</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
            <li>
              <Link to="/wallet">
                <span role="img" aria-label="Wallet">
                  💰
                </span>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

