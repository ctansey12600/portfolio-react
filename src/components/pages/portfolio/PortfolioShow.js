import React from "react";
import { Route, Switch } from "react-router-dom";
import PortfolioList from "./PortfolioList";
import WebDevPage from "./WebDevPage";
import GraphicDesignPage from "./GraphicDesignPage";

function PortfolioShow({ match }) {
  return (
    <>
      <PortfolioList match={match} />
      <Switch>
        <Route path="/portfolio/websites">
          <WebDevPage />
        </Route>
        <Route path="/portfolio/graphics">
          <GraphicDesignPage />
        </Route>
      </Switch>
    </>
  );
}

export default PortfolioShow;
