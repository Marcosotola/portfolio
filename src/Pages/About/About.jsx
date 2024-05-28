import React from "react";
import "./About.css";

const About = ({ hideAbout }) => {
  return (
    <>
      <div
        className={hideAbout ? "aboutContainer hidden" : "aboutContainer"}
        id="about"
      >
        <h1 className="aboutTitle" id="about">
          About
        </h1>
        <div className="aboutMain">
          <h3 className="aboutName">My name is Marco Sotola.</h3>
          <p className="aboutText">
          <strong>
          I am a passionate web developer with 3 years of experience creating functional, attractive, and user-friendly websites and web applications.
          </strong><span> </span>
My journey into the world of web development began 5 years ago when I used web platforms like Wix, Sites, and WordPress for my business. Since then, I have dedicated myself to studying to improve myself as a developer. I have had the opportunity to work on a wide range of projects, from small websites for local businesses to complex web applications for large companies.
<br />
<strong>
I am passionate about creating websites that not only look good but also function smoothly and provide a positive user experience.
</strong><span> </span>
 I am constantly learning new technologies and looking for ways to improve my skills so that I can create the best possible websites for my clients. I am always looking for new challenges and opportunities to learn and grow as a developer. If you are looking for a reliable and passionate web developer, do not hesitate to contact me. I would love to work with you to create a website that meets your needs and exceeds your expectations.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
