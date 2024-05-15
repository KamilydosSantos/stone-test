import React from 'react';
import styled from 'styled-components';

interface ResultProps {
  result: string | undefined;
}

const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Phrase = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
`;

const ResultElement = styled.p`
  font-size: 4rem;
  font-weight: 600;
  line-height: 80px;
  margin: 0;
  color: ${(props) => props.theme.colors.mainGreen};
`;

function Result({ result }: ResultProps) {
  return (
    <Container>
      <Phrase>O resultado do cálculo é</Phrase>
      <ResultElement>R$ {result?.replace('.', ',')}</ResultElement>
    </Container>
  )
}

export default Result;