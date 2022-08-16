//Undone, needs to display websites from data to have similar layout to blogs (vertical list)
import React, { useContext } from "react";
import styled from "styled-components";
import WebsiteCard from "./WebsiteCard";
import { WebsiteContext } from "../../context/websites";

const Websites = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 1235px;
  height: 790px;
  flex: none;
  order: 1;
  flex-grow: 0;
  ul {
    box-sizing: border-box;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

function WebDevPage() {
  const webData = useContext(WebsiteContext);

  if (!webData) return <h2 className="display-text">Loading...</h2>;

  const renderWeb = webData.map((websiteID) => (
    <li key={websiteID.id}>
      <WebsiteCard websiteID={websiteID} />
    </li>
  ));

  return (
    <Websites>
      <ul>{renderWeb}</ul>
    </Websites>
  );
}

export default WebDevPage;
