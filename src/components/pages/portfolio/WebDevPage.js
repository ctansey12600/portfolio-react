//Needs Styling
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
  flex: none;
  order: 1;
  flex-grow: 0;
  ul {
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Even = styled.li`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;

const Odd = styled.li`
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;

function WebDevPage() {
  const webData = useContext(WebsiteContext);

  if (!webData) return <h2 className="display-text">Loading...</h2>;

  const renderWeb = webData.map((websiteID) => {
    if (websiteID.id % 2 === 0) {
      return (
        <Even key={websiteID.id}>
          <WebsiteCard websiteID={websiteID} />
        </Even>
      );
    } else {
      return (
        <Odd key={websiteID.id}>
          <WebsiteCard websiteID={websiteID} />
        </Odd>
      );
    }
  });

  return (
    <Websites>
      <ul>{renderWeb}</ul>
    </Websites>
  );
}

export default WebDevPage;
