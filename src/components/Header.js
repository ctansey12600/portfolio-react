import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../assets/data";

function Header({ isDarkMode, onToggleDarkMode }) {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  const navCollection = routes.map((route) => (
    <NavLink key={route.path} to={route.path} className="main-nav" exact>
      {route.name}
    </NavLink>
  ));

  return (
    <header>
      <nav>{navCollection}</nav>
      <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
}

export default Header;
