import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
