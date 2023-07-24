import React, { useState, useEffect } from 'react';
import './Perfil.css';
import imgPerfil from './imgPerfil.png';

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

  return (
    <>
      <img
        src={imgPerfil}
        alt="perfil"
        className={`perfil ${isVisible ? 'fadeIn' : ''}`}
      />
    </>
  );
};

export default Perfil;



