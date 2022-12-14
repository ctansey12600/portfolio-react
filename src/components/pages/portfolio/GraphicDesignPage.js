//CONTAINS GRAPHIC CONTEXT
import React from "react";
import styled from "styled-components";
import GraphicCard from "./GraphicCard";

const GraphicSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

function GraphicDesignPage({ graphics }) {
  const renderGraphic = graphics.map((value) => (
    <li key={value.id}>
      <GraphicCard value={value} />
    </li>
  ));

  return <GraphicSection>{renderGraphic}</GraphicSection>;
}

export default GraphicDesignPage;
