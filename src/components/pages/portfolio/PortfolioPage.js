import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PortfolioSelection from "./PortfolioSelection";
import PortfolioShow from "./PortfolioShow";
import WProjectPage from "./WProjectPage";
import GProjectPage from "./GProjectPage";

function PortfolioPage({ websites, graphics }) {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path="/portfolio">
          <PortfolioSelection />
        </Route>
        <Route path="/portfolio/websites/:id">
          <WProjectPage websites={websites} />
        </Route>
        <Route path="/portfolio/graphics/:id">
          <GProjectPage graphics={graphics} />
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioShow
            graphics={graphics}
            websites={websites}
            match={match}
          />
        </Route>
      </Switch>
    </>
  );
}

export default PortfolioPage;
