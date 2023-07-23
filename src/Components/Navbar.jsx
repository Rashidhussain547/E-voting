import React from "react"
import './Navbar.css'
import flag from '../../src/Assets/Images/flag.webp'
;
const Navbar = () => {
    return(
        <div className="navbar">
        <h1 className="navbar-heading">E Voting</h1>
        <img
          src={flag}
          alt="Pakistan Flag"
          className="navbar-flag"
        />
      </div>
    )
}
export default Navbar ;
