import React from "react";
import { Link } from "react-router-dom";
import { footerRoutes } from "../assets/data";

function FooterNav() {
  const footerNavCollection = footerRoutes.map((titleRoute) => (
    <div key={titleRoute.name} className="single-listed-main-nav">
      <Link className="main-nav-title" to={titleRoute.path}>
        {titleRoute.name}
      </Link>
      <ul>
        {titleRoute.pages.map((listedRoute) => (
          <li className="main-nav-list" key={listedRoute.name}>
            <Link className="main-nav-listed" to={listedRoute.path}>
              {listedRoute.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));

  return <div className="listed-main-nav">{footerNavCollection}</div>;
}

export default FooterNav;
