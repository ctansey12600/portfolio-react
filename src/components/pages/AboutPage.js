import React from "react";
import styled from "styled-components";
import portrait from "../../assets/about-img.png";
import nature from "../../assets/AboutImg-1-400.jpg";
import travel from "../../assets/AboutImg-2-600-400.jpg";
import pottery from "../../assets/AboutImg-3-600-400.jpg";

const About = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  gap: 45px;
  flex: none;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 104px;
  color: ${(props) => props.theme.color};
  flex: none;
  flex-grow: 0;
`;

const Info = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const InfoImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 27px;
  gap: 10px;
  width: 495px;
  height: 495px;
  background: ${(props) => props.theme.primary};
  flex: none;
  order: 0;
  flex-grow: 0;
  img {
    width: 441px;
    height: 441px;
    border-radius: 50%;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const InfoContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  gap: 20px;
  background: ${(props) => props.theme.secondary};
  width: 495px;
  height: 495px;
  flex: none;
  order: 1;
  flex-grow: 0;
  h2 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 80px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.primary};
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
  }
  hr {
    width: 455px;
    height: 0px;
    border: 10px solid #fdfaf0;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
  h4 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.primary};
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
  }
`;

const Bio = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 40px;
  gap: 32px;
  background: ${(props) => props.theme.infoBody};
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  h3 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    line-height: 54px;
    text-align: center;
    color: ${(props) => props.theme.infoTitle};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Hobbies = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
  flex: none;
  order: 3;
  flex-grow: 0;
  h2 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 80px;
    color: ${(props) => props.theme.color};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const Hobby = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 48px 120px;
  gap: 24px;
  flex: none;
  flex-grow: 0;
  width: 1440px;
  height: 489px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    gap: 32px;
    background: ${(props) => props.theme.secondary};
    flex: none;
    flex-grow: 0;
    width: 608px;
    height: 288px;
  }
  h3 {
    font-family: "Martel";
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    line-height: 54px;
    color: ${(props) => props.theme.backgroundColor};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  p {
    font-family: "Martel";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.primary};
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  img {
    width: 588px;
    height: 393px;
    border-radius: 16px;
    flex: none;
    flex-grow: 0;
  }
`;
function AboutPage() {
  return (
    <About>
      <Title>ABOUT ME</Title>
      <Info>
        <InfoImg>
          <img src={portrait} alt="Portrait of Casey" width="100%" />
        </InfoImg>
        <InfoContact>
          <h2>Contact Info</h2>
          <hr />
          <h4>
            Casey Tansey <br />
            901.282.6233 <br /> ctansey12600@outlook.com
          </h4>
        </InfoContact>
      </Info>
      <Bio>
        <h3>
          Currently, I am pursing a bachelors in GIT: User Experience and
          furthering my knowledge with a certificate in Software Engineering to
          construct my ability to create not only creative, but dynamic designs
          that will drive my ability to contribute to a team-forward Development
          Company.
        </h3>
      </Bio>
      <Hobbies>
        <h2>HOBBIES</h2>
        <Hobby>
          <div>
            <h3>During my spare time, I love to...</h3>
            <p>
              “Be one with nature,” as cheesy as that sounds. I think nature
              provides the essential ingredients to life. It gives me time to
              slow down and have gratitude for the world around me.
            </p>
          </div>
          <img src={nature} alt="Casey on top of mountain" />
        </Hobby>
        <Hobby>
          <img src={travel} alt="Mexico City" />
          <div>
            <h3>When I can, I love to...</h3>
            <p>
              Travel and explore different parts of the country and world. When
              traveling far might not be an option, discovering new
              opportunities in my surrounding area is always a good alternative.
            </p>
          </div>
        </Hobby>
        <Hobby>
          <div>
            <h3>Given the opportunity, I love to...</h3>
            <p>
              Create pottery with both a wheel and by hand. Unfortunately, I no
              longer live near a pottery studio, but it gives more time to
              practice modeling by hand!
            </p>
          </div>
          <img src={pottery} alt="Casey making pottery" />
        </Hobby>
      </Hobbies>
    </About>
  );
}

export default AboutPage;
