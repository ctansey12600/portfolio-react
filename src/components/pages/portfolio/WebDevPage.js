//CONTAINS WEBSITE CONTEXT
import React from "react";
import styled from "styled-components";
import WebsiteCard from "./WebsiteCard";

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

function WebDevPage({ webData }) {
  const renderWeb = webData.projects.map((value) => {
    if (value.id % 2 === 0) {
      return (
        <Even key={value.id}>
          <WebsiteCard value={value} />
        </Even>
      );
    } else {
      return (
        <Odd key={value.id}>
          <WebsiteCard value={value} />
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
