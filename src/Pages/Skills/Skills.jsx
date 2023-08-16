import React from "react";
import "./Skills.css";

const Skills = ({ hideSkills }) => {
  return (
    <>
    <div style={{marginTop: '80px'}}></div>
    <div className={hideSkills ? "skillsContainer hidden" : "skillsContainer"} id="skills">
      {/* Contenido de la sección Skills */}
      <h1>skills</h1>
    </div>
    </>
  );
};

export default Skills;

