import React from "react";
import { Link } from "react-router-dom";

function WebsiteCard({ websiteID }) {
  return (
    <div className="website-card">
      <div className="website-card-preview">
        <img
          src={websiteID.previewPhoto}
          alt="preview img of project"
          border="0"
          width="100%"
        />
      </div>
      <div className="website-card-info">
        <h3>{websiteID.name}</h3>
        <hr />
        <div className="website-card-info-section">
          <p>
            Year Made: {websiteID.yearMade}
            <br />
            Programs Used: {websiteID.languages}
            <br />
            Link: <a href={websiteID.url}>{websiteID.name}</a>
          </p>
        </div>
      </div>
      <div className="website-card-link">
        <Link to={`/portfolio/websites/${websiteID.id}`}>Click for More</Link>
      </div>
    </div>
  );
}

export default WebsiteCard;
