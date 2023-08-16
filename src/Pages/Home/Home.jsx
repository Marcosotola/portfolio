import React, { useState, useEffect } from "react";
import "./Home.css";
import Perfil from "../../components/Perfil/Perfil";
import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";
import Navbar from "../../Sections/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHome, setHideHome] = useState(false);
  const [hideAbout, setHideAbout] = useState(false); // Definir el estado para hideAbout
  const [hideSkills, setHideSkills] = useState(false); // Definir el estado para hideSkills

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const aboutSectionOffset = document.getElementById("about")?.offsetTop || 0;
    const skillsSectionOffset = document.getElementById("skills")?.offsetTop || 0;
    const homeSectionHeight = document.querySelector(".homeContainer")?.clientHeight || 0;

    const hideAboutAt = aboutSectionOffset - homeSectionHeight;
    const hideSkillsAt = skillsSectionOffset - homeSectionHeight;

    setHideHome(scrollPosition >= hideAboutAt && scrollPosition < hideSkillsAt);
    setHideAbout(scrollPosition >= hideSkillsAt);
    setHideSkills(scrollPosition < hideAboutAt);
  }, [scrollPosition]);

  return (
    <>
      <div className={hideHome ? "homeContainer hidden" : "homeContainer"}>
        <Navbar />
        <div className="mainHome">
          <Contact />
          <Title />
          <Perfil />
        </div>
        <Buttons />
      </div>
      <About hideAbout={hideAbout} />
      <Skills hideSkills={hideSkills} />
    </>
  );
};

export default Home;
