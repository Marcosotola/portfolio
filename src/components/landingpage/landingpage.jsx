import React from "react";
import "./landingpage.css";
import video from "./background-video.mp4";

const landingpage = () => {
  return (
    <div className="landingpage">
      <video src={video} className="video-bg" autoPlay muted loop />
      <div className="bg-overlay"></div>
      <div className="navbar">
        <h1>hola buen dia como estas</h1>
      </div>
    
    </div>
  );
};

export default landingpage;
