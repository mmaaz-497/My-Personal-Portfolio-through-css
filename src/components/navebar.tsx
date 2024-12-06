import "../app/styles/navebar.css"
import React from 'react'

const Navebar = () => {
  return (
    <div className="container">
    <div className="navbar">
      <div className="logo">Muhammad Maaz</div>
      <ul className="menu">
        <li className="menuLink">
          <a href="#hero">Home</a>
        </li>
        <li className="menuLink">
          <a href="#about">About</a>
        </li>
        <li className="menuLink">
          <a href="#skills">Skills</a>
        </li>
        <li className="menuLink">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Navebar

