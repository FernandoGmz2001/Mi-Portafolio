import React from "react";
export function HeaderTech({ hide }) {
  return (
    <div className={hide}>
      <p className="header__tech-title">Tecnologías:</p>
      <div className="header__tech-icons">
        <img src="/images/icons/figma.png" alt="figma" />
        <img src="/images/icons/react.png" alt="react" />
        <img src="/images/icons/sql-server.png" alt="sql-server" />
        <img src="/images/icons/tailwind.png" alt="tailwind" />
        <img src="/images/icons/git.png" alt="git" />
      </div>
    </div>
  );
}
