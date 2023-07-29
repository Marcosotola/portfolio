import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Después de 3000 milisegundos (3 segundos), cambiamos isVisible a true
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Limpiamos el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`contact ${isVisible ? "entrada" : ""}`}>
        <div className="phone">
          <i className="fas fa-phone-alt fa-lg"></i>
          <p>+54 9 351 390 8198</p>
        </div>
        <div className="gmail">
          <i className="far fa-envelope fa-lg"></i>
          <p>marcosotola@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;

