import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PortfolioSelection from "./PortfolioSelection";
import PortfolioShow from "./PortfolioShow";
import WProjectPage from "./WProjectPage";
import GProjectPage from "./GProjectPage";

function PortfolioPage({ webData, graphicData }) {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path="/portfolio">
          <PortfolioSelection />
        </Route>
        <Route path="/portfolio/websites/:id">
          <WProjectPage webData={webData} />
        </Route>
        <Route path="/portfolio/graphics/:id">
          <GProjectPage graphicData={graphicData} />
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioShow
            graphicData={graphicData}
            webData={webData}
            match={match}
          />
        </Route>
      </Switch>
    </>
  );
}

export default PortfolioPage;
