
import React, { useState, useEffect } from "react";
import "./Home.css";
import Perfil from "../../components/Perfil/Perfil";
import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";
import Navbar from "../../Sections/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import About from "../About/About";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHome, setHideHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const aboutSectionOffset = document.getElementById("about")?.offsetTop || 0;
    const homeSectionHeight = document.querySelector(".homeContainer")?.clientHeight || 0;
    const hideHomeAt = aboutSectionOffset - homeSectionHeight;

    setHideHome(scrollPosition >= hideHomeAt);
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
      <About />
    </>
  );
};

export default Home;


























