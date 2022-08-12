import React, { useState, useEffect } from "react";

const GraphicContext = React.createContext();

function GraphicProvider({ children }) {
  const [graphicData, setGraphicData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/graphics")
      .then((r) => r.json())
      .then((data) => setGraphicData(data));
  }, []);

  return (
    <GraphicContext.Provider value={graphicData}>
      {children}
    </GraphicContext.Provider>
  );
}

export { GraphicContext, GraphicProvider };
