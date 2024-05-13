import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.main};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Hello, World!</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
