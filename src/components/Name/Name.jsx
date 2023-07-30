import React from 'react';

const Name = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <a href="#about" onClick={handleClick}>
        <h2 className="name">arco Sotola</h2>
      </a>
    </>
  );
};

export default Name;
