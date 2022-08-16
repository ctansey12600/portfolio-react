import React from "react";
import styled from "styled-components";
import resumePdf from "../../assets/resume.pdf";

const Resume = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 46px 0px 80px;
  gap: 45px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  iframe {
    width: 927px;
    height: 1200px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

function ResumePage() {
  return (
    <Resume>
      <iframe
        src={resumePdf}
        title="Tansey_Resume"
        width="100%"
        height="100%"
      ></iframe>
    </Resume>
  );
}

export default ResumePage;
