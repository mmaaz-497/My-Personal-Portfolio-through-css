import React from 'react'
import "../app/styles/hero.css"
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="hero-container">
    <div className="hero-image-container">
      <Image src={"/images/logo.jpg"} width={100} height={100} alt="Logo" className="hero-image" />
    </div>
    <div className="hero-text-container">
      <p>I am</p>
      <p>Muhammad</p>
      <p>Maaz</p>
    </div>
  </div>
  );
}

export default Hero
