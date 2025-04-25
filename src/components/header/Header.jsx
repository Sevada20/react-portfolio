import React from "react";
import "./style.css";
import resume from "../../assets/Sevada_Poghosyan_CV.pdf";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hi, my name is <em>Sevada</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className='header__text'>
          <p>
          I specialize in crafting clean, intuitive, and user-centered web experiences. I'm passionate about building high-quality software that makes a meaningful impact on users' lives.
          </p>
        </div>
        <a href={resume} download='Resume' className='btn'>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
