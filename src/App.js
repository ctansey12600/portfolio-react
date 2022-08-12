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
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor}

}
a {
  color: ${(props) => props.theme.color};
  text-decoration: none;
}
a:hover {
  background-color: var(--light-green);
}
section {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

const Container = styled.div`
  min-height: 100vh;
`;

const lightTheme = {
  backgroundColor: "#EFDFC7",
  color: "#ABC27E",
  primary: "#FDFAF0",
  secondary: "#B14B1C",
};

const darkTheme = {
  backgroundColor: "#FDFAF0",
  color: "#215623",
  primary: "#B14B1C",
  secondary: "#EFDFC7",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
            <PageRouting />
          </WebsiteProvider>
        </GraphicProvider>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
