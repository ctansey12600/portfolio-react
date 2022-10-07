import React, { useState, useEffect } from "react";

const WebsiteContext = React.createContext();

function WebsiteProvider({ children }) {
  const [webData, setWebData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/portfolios/website")
      .then((r) => r.json())
      .then((data) => setWebData(data));
  }, []);

  return (
    <WebsiteContext.Provider value={webData}>
      {children}
    </WebsiteContext.Provider>
  );
}

export { WebsiteContext, WebsiteProvider };
