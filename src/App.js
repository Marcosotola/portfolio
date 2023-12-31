import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import video from "./background-video.mp4";

const App = () => {
  return (
    <Router>
      <div className="video-background-container">
        <video src={video} className="video-background" autoPlay loop muted />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;











