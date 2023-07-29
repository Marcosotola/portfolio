import React from "react";
import "./Navbar.css";
import Name from "../../Name/Name";
import Logo from "../../Logo/Logo";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
      
          <Name />
          <Logo/>
        
      </div>
      <div className="nav">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord fa-lg"></i>
        </a>
        <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-slack fa-lg"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </>
  );
};

export default Navbar;
