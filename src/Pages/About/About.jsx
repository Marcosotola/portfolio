import React from "react";
import "./About.css";

const About = ({ hideAbout }) => {
  return (
    <>
    <div
      className={hideAbout ? "aboutContainer hidden" : "aboutContainer"}
      id="about"
    >
      <h1 className="aboutTitle" id="about">About</h1>
      <div className="aboutMain">
        <h3 className="aboutName">Mi nombre es Marco Sotola.</h3>
        <p className="aboutText">
          Soy un desarrollador web FullStack con sede en la hermosa Córdoba,
          centro geográfico de Argentina. Realmente disfruto resolver problemas
          y hacer que las cosas sean bonitas y fáciles de usar. No puedo dejar
          de aprender cosas nuevas; mientras más, mejor. También me encanta la
          robótica y la automatización . Ah, y la lasagna; ¡Tengo pasión por la
          lasagna!
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
