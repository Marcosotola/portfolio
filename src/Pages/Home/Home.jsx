import React from "react";
import "./Home.css";
import Perfil from "../../components/Perfil/Perfil";
import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";
import Navbar from "../../components/Sections/Navbar/Navbar";
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mainHome">
        <Contact />
        <Title />
        <Perfil />
      </div>

      <Buttons />
    </>
  );
};

export default Home;
