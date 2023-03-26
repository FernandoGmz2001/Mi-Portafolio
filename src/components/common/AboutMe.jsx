import React from "react";

function AboutMe() {
  return (
    <div className="aboutMe" id="SobreMi">
      <div className="aboutMe__content">
        <h4 className="aboutMe__title">Sobre mi</h4>
        <p className="aboutMe__subtitle">
          Hola, soy Fernando Gómez. Un desarrollador FullStack en constante
          crecimiento!
        </p>
        <p className="aboutMe__text">
          Como un desarrollador Junior poseo habilidades de FrontEnd y Backend,
          además de manejar herramientas como React, Tailwind, Sql Server y
          Github. Mi propósito es crear interfaces programadas con un código
          limpio y con buenas prácticas, además de hacerlo en un tiempo
          efectivo. Tengo habilidades de comunicación y trabajo en equipo,
          siempre dispuesto a mejorar!
        </p>
      </div>
      <div className="aboutMe__image">
        <img src="/images/icons/computer.png" alt="computer" />
      </div>
    </div>
  );
}

export default AboutMe;
