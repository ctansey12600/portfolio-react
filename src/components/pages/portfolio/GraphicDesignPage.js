//CONTAINS GRAPHIC CONTEXT
import React, { useContext } from "react";
import styled from "styled-components";
import GraphicCard from "./GraphicCard";
import { GraphicContext } from "../../context/graphics";

const GraphicSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

function GraphicDesignPage() {
  const graphicData = useContext(GraphicContext);

  if (!graphicData) return <h2 className="display-text">Loading...</h2>;

  const renderGraphic = graphicData.map((value) => (
    <li key={value.id}>
      <GraphicCard value={value} />
    </li>
  ));

  return <GraphicSection>{renderGraphic}</GraphicSection>;
}

export default GraphicDesignPage;
