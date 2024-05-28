import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Sections/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Loader from './Pages/loader/Loader'; // Import your loader component
import video from './background-video.webm';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load (replace with your actual loading logic)
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return (
    <Router>
      <div className="video-background-container">
        <video src={video} className="video-background" autoPlay loop muted />
        <div className="content">
          {/* Conditionally render loader or content */}
          {isLoading ? <Loader /> : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;












