import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import Converter from './components/converter/Converter';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/background-image.png');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 64px;
  font-family: 'Roboto', sans-serif;
`;

const Credits = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
  cursor: pointer;
  & a {
    color: ${(props) => props.theme.colors.textSecondary};
  }
  & a:hover {
    color: ${(props) => props.theme.colors.mainGreen};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Container>
          <Header />
          <Converter />
          <Credits>Feito por <a href='https://github.com/KamilydosSantos' target="_blank">Kamily dos Santos</a></Credits>
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default App;