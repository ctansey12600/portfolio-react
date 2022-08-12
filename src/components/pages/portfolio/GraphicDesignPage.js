import React, { useContext } from "react";
import GraphicCard from "./GraphicCard";
import { GraphicContext } from "../../context/graphics";

function GraphicDesignPage() {
  const graphicData = useContext(GraphicContext);

  if (!graphicData) return <h2 className="display-text">Loading...</h2>;

  const renderGraphic = graphicData.map((graphicID) => (
    <li key={graphicID.id}>
      <GraphicCard graphicID={graphicID} />
    </li>
  ));

  return (
    <section className="graphics">
      <ul>{renderGraphic}</ul>
    </section>
  );
}

export default GraphicDesignPage;
