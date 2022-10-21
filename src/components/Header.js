import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Wrapper, Navigation } from "./shared/ProjectStyles";

function Header({ isDarkMode, onToggleDarkMode }) {
  // Provides button value, if state is true -> Light; false -> Dark
  const buttonTextContent = isDarkMode ? "Light" : "Dark";

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/resume", name: "Resume" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  const navCollection = routes.map((route) => (
    <Button as={NavLink} key={route.path} to={route.path} exact>
      {route.name}
    </Button>
  ));

  return (
    <Wrapper>
      <Navigation>{navCollection}</Navigation>
      <Button onClick={onToggleDarkMode}>{buttonTextContent}</Button>
    </Wrapper>
  );
}

export default Header;
