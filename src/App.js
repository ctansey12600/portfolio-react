import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { WebsiteProvider } from "./components/context/websites";
import { GraphicProvider } from "./components/context/graphics";
import Header from "./components/Header";
import PageRouting from "./components/PageRouting";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
:root {
  --light-orange: #FB9C4C;
  --orange: #E37F51;
  --dark-orange: #B14B1C;
  --light-tan: #FDFAF0;
  --tan: #EFDFC7;
  --light-green: #E8F4D0;
  --green: #ABC27E;
  --dark-green: #215623;
  --white: #FFFFFF;
  --black: #000000;
  --color: ${(props) => props.theme.color};
  --background: ${(props) => props.theme.backgroundColor};
  --info-title: ${(props) => props.theme.infoTitle};
  --info-body: ${(props) => props.theme.infoBody};
  --primary: ${(props) => props.theme.primary};
  --secondary: ${(props) => props.theme.secondary};
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Martel", regular;
  font-size: 18px;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundColor}
}
a {
  text-decoration: none;
}
section {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  list-style-type: none;
}
`;

const Container = styled.div`
  min-height: 100vh;
`;

const lightTheme = {
  backgroundColor: "#FDFAF0",
  color: "#FB9C4C",
  primary: "#B14B1C",
  secondary: "#EFDFC7",
  infoTitle: "#215623",
  infoBody: "#E8F4D0",
};

const darkTheme = {
  backgroundColor: "#E37F51",
  color: "#FDFAF0",
  primary: "#EFDFC7",
  secondary: "#B14B1C",
  infoTitle: "#E8F4D0",
  infoBody: "#215623",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
        <GraphicProvider>
          <WebsiteProvider>
            <main>
              <PageRouting />
            </main>
          </WebsiteProvider>
        </GraphicProvider>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
