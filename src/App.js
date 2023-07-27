import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import BgMusic from "./components/BgMusic/BgMusic";
import video from "./background-video.mp4";


const App = () => {
  return (
    <>

      <div className="video-background-container">
        <video src={video} className="video-background" autoPlay loop muted />
        <div className="content">
          <Home />
          <BgMusic />
        </div>
      </div>
    </>
  )
}

export default App


