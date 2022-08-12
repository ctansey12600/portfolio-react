import React from "react";
import resumePdf from "../../assets/resume.pdf";

function ResumePage() {
  return (
    <section className="resume">
      <div className="resume-frame">
        <iframe
          src={resumePdf}
          title="Tansey_Resume"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}

export default ResumePage;
