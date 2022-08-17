//About routing to favorite/most recent project
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { footerRoutes } from "../assets/data";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  flex: none;
  flex-grow: 1;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  flex: none;
  align-self: stretch;
  flex-grow: 1;
`;
const Title = styled.h4`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: ${(props) => props.theme.infoTitle};
  flex: none;
  flex-grow: 0;
  &:hover {
    color: var(--green);
  }
`;
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

function FooterNav() {
  const footerNavCollection = footerRoutes.map((titleRoute) => (
    <List key={titleRoute.name}>
      <Title as={Link} to={titleRoute.path}>
        {titleRoute.name}
      </Title>
      <ul>
        {titleRoute.pages.map((listedRoute) => (
          <li key={listedRoute.name}>
            <Body as={Link} to={listedRoute.path}>
              {listedRoute.name}
            </Body>
          </li>
        ))}
      </ul>
    </List>
  ));

  return <Wrapper>{footerNavCollection}</Wrapper>;
}

export default FooterNav;
