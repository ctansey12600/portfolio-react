import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import portfolioImg from "../../../assets/portfolio-selection.png";

const Portfolio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 120px;
  gap: 24px;
  flex: none;
  flex-grow: 0;
`;

const Intro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 588px;
  height: 623px;
  h1 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 900;
    font-size: 96px;
    line-height: 104px;
    color: ${(props) => props.theme.color};
    flex: none;
    order: 0;
    align-self: stretch;
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
    align-self: stretch;
    flex-grow: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  flex: none;
  order: 2;
  flex-grow: 0;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 8px;
    background: ${(props) => props.theme.secondary};
    border-radius: 8px;
    flex: none;
    flex-grow: 0;
    border-style: none;
    a {
      font-family: "Martel";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: ${(props) => props.theme.primary};
    }
    &:hover {
      background-color: ${(props) => props.theme.primary};
      border-bottom: 1px solid ${(props) => props.theme.info};
      a {
        color: ${(props) => props.theme.secondary};
      }
    }
  }
`;

const ImageSection = styled.section`
  width: 610px;
  height: 623px;
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  img {
    height: 623px;
    width: 610px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }
`;

function PortfolioSelection() {
  return (
    <Portfolio>
      <Intro>
        <h1 className="display-text">
          Portfolio
          <br />
          Selection
        </h1>
        <p>
          Website Development and Graphic Design both play key roles into my
          desired career, to see some work that I have done in the past, select
          below:
        </p>
        <ButtonGroup>
          <button>
            <Link to="/portfolio/websites">Websites</Link>
          </button>
          <button>
            <Link to="/portfolio/graphics">Graphics</Link>
          </button>
        </ButtonGroup>
      </Intro>
      <ImageSection>
        <img src={portfolioImg} alt="logo of Casey" />
      </ImageSection>
    </Portfolio>
  );
}

export default PortfolioSelection;
