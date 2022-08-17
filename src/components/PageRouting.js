//DONE - Needs CSS
import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop.";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function PageRouting() {
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
          <PortfolioPage />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/blog">
          <BlogPage />
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
