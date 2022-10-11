import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import PortfolioList from "./PortfolioList";
import WebDevPage from "./WebDevPage";
import GraphicDesignPage from "./GraphicDesignPage";

const Portfolio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  gap: 50px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;
function PortfolioShow({ match, webData, graphicData }) {
  return (
    <Portfolio>
      <PortfolioList match={match} />
      <Switch>
        <Route path="/portfolio/websites">
          <WebDevPage webData={webData} />
        </Route>
        <Route path="/portfolio/graphics">
          <GraphicDesignPage graphicData={graphicData} />
        </Route>
      </Switch>
    </Portfolio>
  );
}

export default PortfolioShow;
