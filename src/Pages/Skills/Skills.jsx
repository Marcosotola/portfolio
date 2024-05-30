import React from "react";
import "./Skills.css";
import Carousel from "../../components/carousel/Carousel"

const Skills = ({ hideSkills }) => {
  return (
    <>
    <div style={{marginTop: '80px'}}></div>
    <div className={hideSkills ? "skillsContainer hidden" : "skillsContainer"} id="skills">
      <h1>soy skills</h1>

<Carousel />
    </div>
    </>
  );
};

export default Skills;

