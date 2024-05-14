import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import Converter from './components/converter/Converter';

const Container = styled.div`
  font-family: 'Roboto';
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Converter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
