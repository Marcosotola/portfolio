import React from "react";
import "./Home.css";
import Perfil from "../../components/Perfil/Perfil";
import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";
import Name from "../../components/Name/Name";
import Navbar from "../../components/Sections/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
        <Name />
      <div className="contentPerfil">
        <Perfil />
      </div>
      <div className="overlay">
        <Title />
      </div>
      <Buttons />
    </>
  );
};

export default Home;
