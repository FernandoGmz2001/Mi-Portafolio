import { DesktopMenu } from "../ui/DesktopMenu";
import React, { useContext, useState } from "react";
import { MenuContext } from "../../contexts/menuContext";
export function Navbar({}) {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h4>Xyfer</h4>
      </div>
      <div className="navbar__menu" onClick={() => setMenu(true)}>
        <img src="/images/icons/menu-icon.png" alt="menu-icon" />
      </div>
      <div className={menu ? "menu__cover" : "menu__cover hidden"}></div>
      <div className={menu ? "menu" : "menu hidden"}>
        <a href="#" onClick={() => setMenu(false)}>
          <h3>Inicio</h3>
        </a>
        <a href="#Proyectos" onClick={() => setMenu(false)}>
          <h3>Proyectos</h3>
        </a>
        <a href="#SobreMi" onClick={() => setMenu(false)}>
          <h3>Sobre mi</h3>
        </a>
        <a href="#Contacto" onClick={() => setMenu(false)}>
          <h3>Contacto</h3>
        </a>
        <div className="close__container" onClick={() => setMenu(false)}>
          <img src="/images/icons/close-icon.png" alt="close" />
        </div>
      </div>
      <DesktopMenu />
    </nav>
  );
}
