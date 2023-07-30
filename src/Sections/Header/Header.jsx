import React from "react";
import "./Header.css";
import Logo from "../../components/Logo/Logo";
import Name from "../../components/Name/Name";
import BgMusic from "../../components/BgMusic/BgMusic";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <Logo />
          <Name />
        </div>
        <div className="menu">
          <BgMusic />
          <div>
          <i className="fa fa-bars fa-lg"></i>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
