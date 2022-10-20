//DONE - Needs CSS
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop.";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";

function PageRouting() {
  const [portfolioData, setPortfolioData] = useState({
    websites: [],
    graphics: [],
    blogs: [],
    loaded: false,
  });

  useEffect(() => {
    fetch("http://localhost:9292/portfolios")
      .then((r) => r.json())
      .then((data) => sortData(data));
  }, []);

  function sortData(data) {
    const sortedData = { loaded: true };
    data.forEach((value) => {
      switch (value.name) {
        case "Website Development":
          return (sortedData["websites"] = value.projects);
        case "Graphic Design":
          return (sortedData["graphics"] = value.projects);
        case "Blog":
          return (sortedData["blogs"] = value.projects);
        default:
          return;
      }
    });
    setPortfolioData(sortedData);
  }

  if (portfolioData.loaded) {
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
            <PortfolioPage
              websites={portfolioData.websites}
              graphics={portfolioData.graphics}
            />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/blog">
            <BlogPage blogs={portfolioData.blogs} />
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
  } else {
    return <h2 className="display-text">Loading...</h2>;
  }
}

export default PageRouting;
