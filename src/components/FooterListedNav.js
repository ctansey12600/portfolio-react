import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Body = styled.h4`
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: var(--green);
  flex: none;
  flex-grow: 0;
  &:hover {
    color: ${(props) => props.theme.infoTitle};
  }
`;

function FooterListedNav({ portfolio, path, pathName }) {
  const [isPath, setIsPath] = useState(path);

  if (pathName === "Most Recent") {
    useEffect(() => {
      fetch(`http://localhost:9292/portfolios/recentProject/${portfolio}`)
        .then((r) => r.json())
        .then((projectID) => setIsPath((isPath) => isPath + projectID.id));
    }, []);
  } else if (pathName === "My Favorite") {
    let favoriteProject =
      portfolio === "Website Development"
        ? "Casey Tansey Portfolio"
        : "Date Night";
    useEffect(() => {
      fetch(`http://localhost:9292/projects/myFavorite/${favoriteProject}`)
        .then((r) => r.json())
        .then((projectID) => setIsPath((isPath) => isPath + projectID.id));
    }, []);
  }

  return (
    <li>
      <Body as={Link} to={isPath}>
        {pathName}
      </Body>
    </li>
  );
}

export default FooterListedNav;
