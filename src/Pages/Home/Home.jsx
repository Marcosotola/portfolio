import React from "react";
import "./Home.css";
import Perfil from "../../components/Perfil/Perfil";
import Title from "../../components/Title/Title";
import Buttons from "../../components/Buttons/Buttons";

const Home = () => {
  return (
    <>
    <h2 className="name">Marco Sotola</h2>
      <div className="bg-overlay">
        <Title />
        <Perfil />
      </div>
      <Buttons />
    </>
  );
};

export default Home;
