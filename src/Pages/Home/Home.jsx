import React from "react";
import "./Home.css";
import video from "./background-video.mp4";
import Perfil from "../../components/Perfil/Perfil";
import Title from "../../components/Title/Title";

const Home = () => {
  return (
    <>
      <div className="landingpage">
        <video src={video} className="video-bg" autoPlay muted loop />
        <div className="navbar" style={{height:'2rem'}}>
        </div>
        <div className="bg-overlay">
          <Title />
          <Perfil />
        </div>
      </div>
    </>
  );
};

export default Home;
