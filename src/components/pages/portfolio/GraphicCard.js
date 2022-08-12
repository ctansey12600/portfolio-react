import React from "react";
import { Link } from "react-router-dom";

function GraphicCard({ graphicID }) {
  return (
    <div className="graphic-card">
      <img src={graphicID.src} alt="preview of graphic" />
      <div className="graphic-card-info">
        <h2 className="regular-text">{graphicID.name}</h2>
        <p>
          Purpose: {graphicID.purpose}
          <br />
          Year Made: {graphicID.yearMade}
          <br />
          Programs Used: {graphicID.application}
        </p>
      </div>
      <div className="graphic-card-btn">
        <button>
          <Link to={`/portfolio/graphics/${graphicID.id}`}>Click for More</Link>
        </button>
      </div>
    </div>
  );
}

export default GraphicCard;
