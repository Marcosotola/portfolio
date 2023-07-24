import React from 'react'
import './Logo.css';
import imgLogo from './imgLogo.png'

const Logo = () => {
  return (
    <>
      <img src={imgLogo} alt="logo" className='logo'/>
      <p className='textLogo'>
        Marco Sotola
      </p>
    </>
  )
}

export default Logo;
