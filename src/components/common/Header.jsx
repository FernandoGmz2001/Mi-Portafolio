import { HeaderTech } from "../common/HeaderTech";
import React, { useContext } from "react";
import { Navbar } from "../common/Navbar";

export function Header({}) {
  return (
    <div className="header" id="Inicio">
      <div className="header__socials">
        <img src="/images/icons/github-gray.png" alt="github" />
        <img src="/images/icons/linkedin-gray.png" alt="linkedin" />
        <img src="/images/icons/facebook-gray.png" alt="facebook" />
      </div>
      <div className="header__content">
        <h1 className="header__title">
          Desarrollador FullStack
          <img
            src="/images/icons/rocket-icon.png"
            alt="rocket-icon"
            className="rocket-icon"
          />
        </h1>
        <p className="header__text">
          Hola, soy Fernando Gómez. Un desarrollador FullStack en constante
          crecimiento!
        </p>
        <HeaderTech hide={"header__tech --header"} />
      </div>
      <div className="header__image">
        <img src="/images/fernando.png" alt="fernando" />
      </div>
      <HeaderTech hide={"header__tech"} />
    </div>
  );
}
