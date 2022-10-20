//CONTAINS WEBSITE CONTEXT
import React from "react";
import styled from "styled-components";
import WebsiteCard from "./WebsiteCard";
import ColorSwitch from "../../shared/ColorSwitch";

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

const Even = styled.div`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;

const Odd = styled.div`
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;

function WebDevPage({ websites }) {
  const renderWeb = websites.map((value, index) => {
    let currentColor = ColorSwitch(index);

    return (
      <li key={value.id}>
        {currentColor ? (
          <Even>
            <WebsiteCard value={value} />
          </Even>
        ) : (
          <Odd>
            <WebsiteCard value={value} />
          </Odd>
        )}
      </li>
    );
  });

  return (
    <Websites>
      <ul>{renderWeb}</ul>
    </Websites>
  );
}

export default WebDevPage;
