import React, { useRef, useState } from 'react';
import Music from './bgMusic.mp3';
import { FaPlay, FaPause } from 'react-icons/fa';
import './BgMusic.css';

const BgMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <>
    <div className="btnPlay">
      <audio ref={audioRef} src={Music} loop />
      <button className="music-button" onClick={toggleAudio}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      </div>
    </>
  );
};

export default BgMusic;

