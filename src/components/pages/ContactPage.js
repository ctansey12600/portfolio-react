import React from "react";
import QuestionForm from "./QuestionForm";

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="info-section">
        <div className="info-section-frame">
          <h2 className="display-text">CONTACT ME</h2>
          <div className="info-section-text">
            <h3 className="regular-text">Casey Tansey</h3>
            <hr />
            <div className="info-section-contact">
              <h4 className="regular-text">(901)282-6233</h4>
              <h4 className="regular-text">ctansey12600@outlook.com</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="question-section">
        <QuestionForm />
      </section>
    </div>
  );
}

export default ContactPage;
