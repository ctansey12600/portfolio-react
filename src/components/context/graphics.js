import React, { useState, useEffect } from "react";

const GraphicContext = React.createContext();

function GraphicProvider({ children }) {
  const [graphicData, setGraphicData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/portfolios/graphic")
      .then((r) => r.json())
      .then((data) => setGraphicData(data[0]["projects"]));
  }, []);

  return (
    <GraphicContext.Provider value={graphicData}>
      {children}
    </GraphicContext.Provider>
  );
}

export { GraphicContext, GraphicProvider };
