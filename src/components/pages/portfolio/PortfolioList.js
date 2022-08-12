import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../assets/data";

function PortfolioList({ match }) {
  const portfolioCollection = routes[2].pages.map((route) => (
    <NavLink key={route.path} to={`${match.url}${route.path}`}>
      {route.name}
    </NavLink>
  ));

  return (
    <div>
      <nav>{portfolioCollection}</nav>
    </div>
  );
}

export default PortfolioList;
