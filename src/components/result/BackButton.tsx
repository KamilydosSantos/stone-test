import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../icons/BackIcon';

interface BackButtonProps {
  onClick: () => void;
}

const ButtonElement = styled.button`
  width: 120px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.textTertiary};
  border-radius: 8px;
  padding: 16px;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 22px;
  cursor: pointer;
  box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
`;

function BackButton({ onClick }: BackButtonProps) {
  return (
    <ButtonElement onClick={onClick}>
      <BackIcon />
      Voltar
    </ButtonElement>
  )
}

export default BackButton;