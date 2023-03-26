import React from "react";
export function Card({ subtitle, title, text, github, image, color }) {
  return (
    <div className={color}>
      <div className="card__header">
        <p className="card__subtitle">{subtitle}</p>
        <h4 className="card__title">{title}</h4>
        <p className="card__text">{text}</p>
        <div className="card__links">
          <a href={github}>
            <img src="/images/icons/github-white.png" alt="github" />
          </a>
          <button className="btnVisitarPagina">Vistar página</button>
        </div>
      </div>
      <div className="card__image">
        <img src={image} alt="page__image" />
      </div>
    </div>
  );
}
