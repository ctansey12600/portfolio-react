import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterListedNav from "./FooterListedNav";
import FooterContactNav from "./FooterContactNav";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  gap: 50px;
  background: ${(props) => props.theme.infoBody};
  width: 100%;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

const MainFooterNav = styled.div`
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

function Footer() {
  const routes = [
    {
      path: "/",
      name: "Casey Tansey",
      pages: [
        { path: "/about", name: "About Me" },
        { path: "/resume", name: "Resume" },
        { path: "/blog", name: "Blog" },
      ],
    },
    {
      path: "/portfolio/websites",
      name: "Website Development",
      pages: [
        {
          path: "/portfolio/websites/",
          name: "Most Recent",
        },
        {
          path: "/portfolio/websites/",
          name: "My Favorite",
        },
        { path: "/portfolio/websites", name: "All" },
      ],
    },
    {
      path: "/portfolio/graphics",
      name: "Graphic Design",
      pages: [
        {
          path: "/portfolio/graphics/",
          name: "Most Recent",
        },
        {
          path: "/portfolio/graphics/",
          name: "My Favorite",
        },
        {
          path: "/portfolio/graphics",
          name: "All",
        },
      ],
    },
  ];

  const footerNavCollection = routes.map((title) => (
    <List key={title.name}>
      <Title as={Link} to={title.path}>
        {title.name}
      </Title>
      <ul>
        {title.pages.map((listedItem) => (
          <FooterListedNav
            key={title.name + listedItem.name}
            path={listedItem.path}
            pathName={listedItem.name}
            portfolio={title.name}
          />
        ))}
      </ul>
    </List>
  ));

  return (
    <Wrapper>
      <MainFooterNav>{footerNavCollection}</MainFooterNav>
      <FooterContactNav />
    </Wrapper>
  );
}

export default Footer;
