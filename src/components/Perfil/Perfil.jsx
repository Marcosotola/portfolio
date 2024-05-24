import React, { useState, useEffect } from 'react';
import './Perfil.css';
import imgPerfil from './imgPerfil.webp';

const Perfil = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Función para cambiar el estado después de 2 segundos
    const showPerfilAfterDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Limpieza: cancelar el temporizador si el componente se desmonta antes de que transcurran los 2 segundos
    return () => clearTimeout(showPerfilAfterDelay);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <img
      src={imgPerfil}
      alt="perfil"
      className={`perfil ${isVisible ? 'fadeIn' : ''}`}
      onClick={scrollToAbout}
      style={{ cursor: 'pointer' }} // Añadir estilo de cursor para indicar que es clickeable
    />
  );
};

export default Perfil;


