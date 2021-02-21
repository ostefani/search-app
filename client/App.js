import React from 'react';
// import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'settings/theme';
import HomeContainer from 'containers/HomeContainer';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-size: 16px;
        font-family: sans-serif;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <HomeContainer />
            </ThemeProvider>
        </>
    );
}

export default App;
