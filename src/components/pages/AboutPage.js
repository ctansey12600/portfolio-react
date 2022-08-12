import React from "react";
import portrit from "../../assets/about-img.png";
import nature from "../../assets/About-nature.JPG";
import pottery from "../../assets/About-pottery.jpeg";
import travel from "../../assets/About-travel.jpeg";

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="display-text">ABOUT ME</h1>
      <section className="info-section">
        <div className="info-img">
          <img src={portrit} alt="Portrit of Casey" width="100%" />
        </div>
        <div className="info-contact">
          <h2 className="display-text">Contact Info</h2>
          <hr />
          <h4 className="regular-text">
            Casey Tansey <br />
            901.282.6233 <br /> ctansey12600@outlook.com
          </h4>
        </div>
      </section>
      <section className="bio-section">
        <h3 className="regular-text">
          Currently, I am pursing a bachelors in GIT: User Experience and
          furthering my knowledge with a certificate in Software Engineering to
          construct my ability to create not only creative, but dynamic designs
          that will drive my ability to contribute to a team-forward Development
          Company.
        </h3>
      </section>
      <section className="hobbies-section">
        <h2 className="display-text">HOBBIES</h2>
        <section className="hobby-section">
          <div className="hobby-info">
            <h3 className="regular-text">During my spare time, I love to...</h3>
            <p>
              “Be one with nature,” as cheesy as that sounds. I think nature
              provides the essential ingredients to life. It gives me time to
              slow down and have graditude for the world around me.
            </p>
          </div>
          <img src={nature} alt="Casey on top of mountain" />
        </section>
        <section className="hobby-section">
          <img src={travel} alt="Mexico City" />
          <div className="hobby-info">
            <h3 className="regular-text">When I can, I love to...</h3>
            <p>
              Travel and explore different parts of the country and world. When
              traveling far might not be an option, and discovering new
              opporunities in my surrounding area is always a good alternative.
            </p>
          </div>
        </section>
        <section className="hobby-section">
          <div className="hobby-info">
            <h3 className="regular-text">
              Given the opportunity, I love to...
            </h3>
            <p>
              Create pottery with both a wheel and by hand. Unfortunately, I no
              longer live near a pottery studio, but it gives more time to
              practice modling by hand!
            </p>
          </div>
          <img src={pottery} alt="Casey making pottery" />
        </section>
      </section>
    </div>
  );
}

export default AboutPage;
