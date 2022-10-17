import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
  isolation: isolate;
  width: 384px;
  height: 470px;
  background: ${(props) => props.theme.secondary};
  box-shadow: 0px 2px 4px rgba(9, 8, 66, 0.08),
    0px 4px 24px rgba(9, 8, 66, 0.04);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 1;
  img {
    width: 352px;
    height: 198px;
    border-radius: 16px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    z-index: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 8px;
    width: 352px;
    height: 152px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    z-index: 1;
    h2 {
      font-family: "Martel";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      color: ${(props) => props.theme.backgroundColor};
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }
    p {
      font-family: "Martel";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: ${(props) => props.theme.primary};
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
  }
`;

const CardButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 8px;
  width: 352px;
  height: 56px;
  background: ${(props) => props.theme.color};
  border-radius: 8px;
  border-style: none;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  z-index: 2;
  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.backgroundColor};
  &:hover {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
  }
`;

function GraphicCard({ value }) {
  return (
    <Card>
      <img src={value.photos[0].thumbnail} alt={value.photos[0].alt} />
      <div>
        <h2 className="regular-text">{value.name}</h2>
        <p>
          Year Made: {value.date_made}
          <br />
          Programs Used: {value.languages}
        </p>
      </div>
      <CardButton as={Link} to={`/portfolio/graphics/${value.id}`}>
        Click for More
      </CardButton>
    </Card>
  );
}

export default GraphicCard;
