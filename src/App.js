import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import BgMusic from "./components/BgMusic/BgMusic";
import video from "./background-video.mp4";


const App = () => {
  return (
    <>
      <div className="App">
        <div className="landingpage">
          <video src={video} className="video-bg" autoPlay muted loop />
          <Home />
          <BgMusic />
        </div>
      </div>
    </>
  )
}

export default App


