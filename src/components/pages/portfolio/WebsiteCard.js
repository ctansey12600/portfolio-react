import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WebCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
  position: absolute;
  width: 1195px;
  height: 250px;
  left: 20px;
  top: 520px;
`;

function WebsiteCard({ websiteID }) {
  return (
    <WebCard>
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
    </WebCard>
  );
}

export default WebsiteCard;
