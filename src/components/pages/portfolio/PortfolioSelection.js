import React from "react";
import { Link } from "react-router-dom";
import portfolioImg from "../../../assets/portfolio-selection.png";

function PortfolioSelection() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-selection">
        <h1 className="display-text">Portfolio Selection</h1>
        <p>
          Website Development and Graphic Design both play key roles into my
          desired career, to see some work that I have done in the past, select
          below:
        </p>
        <div className="portfolio-selection-btn-group">
          <button>
            <Link to="/portfolio/websites">Websites</Link>
          </button>
          <button>
            <Link to="/portfolio/graphics">Graphics</Link>
          </button>
        </div>
      </section>
      <section className="portfolio-img">
        <img src={portfolioImg} alt="logo of Casey" />
      </section>
    </div>
  );
}

export default PortfolioSelection;
