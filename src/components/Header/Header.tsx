import React from 'react';
import styled from 'styled-components';
import StoneLogo from './StoneLogo';
import DateTimeDisplay from './DateTimeDisplay';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Information = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textTertiary};
  margin: 0;
`;

function Header() {
  return (
    <Container>
      <StoneLogo />
      <div>
        <DateTimeDisplay />
        <Information>Dados de câmbio disponibilizados pela Morningstar.</Information>
      </div>
    </Container>
  )
}

export default Header;
