import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { routes } from "../assets/data";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 1rem;
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
  color: ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.primary};
  border-style: none;
  border-radius: 8px;
  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  flex: none;
  flex-grow: 0;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
    border-bottom: 1px solid ${(props) => props.theme.info};
    color: ${(props) => props.theme.primary};
  }
`;

function Header({ isDarkMode, onToggleDarkMode }) {
  const buttonTextContent = isDarkMode ? "Light" : "Dark";

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
