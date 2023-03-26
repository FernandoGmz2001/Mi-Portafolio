import React from "react";
import ProjectsJson from "../../utils/Proyects.json";
import { Card } from "../common/Card";

export function Projects({}) {
  return (
    <section className="projects" id="Proyectos">
      <div className="projects__header">
        <h4 className="projects__title">Proyectos</h4>
        <p className="projects__subtitle">
          Algunos ejercicios de FrontendMentor
        </p>
      </div>
      <div className="projects__content">
        {ProjectsJson.map((project) => {
          return (
            <Card
              key={project.id}
              subtitle={project.type}
              title={project.title}
              text={project.description}
              github={project.github}
              image={project.image}
              color={project.color}
            />
          );
        })}
      </div>
    </section>
  );
}
