//DONE - Needs CSS
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop.";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function PageRouting() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/portfolios")
      .then((r) => r.json())
      .then((data) => setPortfolioData(data));
  }, []);

  if (!portfolioData) return <h2 className="display-text">Loading...</h2>;

  let webData;
  let graphicData;
  let blogData;

  function sortData() {
    portfolioData.forEach((element) => {
      switch (element.name) {
        case "Website Development":
          return (webData = element);
        case "Graphic Design":
          return (graphicData = element);
        case "Blog":
          return (blogData = element);
        default:
          return null;
      }
    });
  }

  sortData();

  if (!webData) return <h2 className="display-text">Loading...</h2>;
  if (!graphicData) return <h2 className="display-text">Loading...</h2>;
  if (!blogData) return <h2 className="display-text">Loading...</h2>;

  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage webData={webData} graphicData={graphicData} />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/blog">
          <BlogPage blogData={blogData} />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </ScrollToTop>
  );
}

export default PageRouting;
