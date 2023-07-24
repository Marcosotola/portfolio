import React from "react";
import "./Home.css";
import video from "./background-video.mp4";
import Perfil from "../../components/Perfil/Perfil";
import Logo from "../../components/Logo/Logo";

const Home = () => {
  return (
    <>
      <div className="landingpage">
        <video src={video} className="video-bg" autoPlay muted loop />
        <div className="navbar">
          <Logo />
        </div>
        <div className="bg-overlay">
          <h1 className="title">
            I do <span>web</span> development{" "}
          </h1>
          <Perfil />
        </div>
      </div>
    </>
  );
};

export default Home;

