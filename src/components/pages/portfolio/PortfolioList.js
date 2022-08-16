import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../../../assets/data";

const PortfolioNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 728px;
  height: 88px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 8px;
  width: 364px;
  height: 88px;
  background: ${(props) => props.theme.infoBody};
  border-radius: 8px 8px 8px 8px;
  border-style: none;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 68px;
  color: ${(props) => props.theme.infoTitle};
  flex: none;
  order: 0;
  flex-grow: 0;
  &.active {
    background: ${(props) => props.theme.infoTitle};
    color: ${(props) => props.theme.infoBody};
  }
`;

function PortfolioList({ match }) {
  const portfolioCollection = routes[2].pages.map((route) => (
    <Button as={NavLink} key={route.path} to={`${match.url}${route.path}`}>
      {route.shortName}
    </Button>
  ));

  return <PortfolioNav>{portfolioCollection}</PortfolioNav>;
}

export default PortfolioList;
