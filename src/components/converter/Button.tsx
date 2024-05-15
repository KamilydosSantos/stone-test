import React from 'react';
import styled from 'styled-components';
import ConverterIcon from '../../icons/ConverterIcon';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const ButtonElement = styled.button`
  width: 149px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.mainGreen};
  border: 1px solid ${(props) => props.theme.colors.secondaryGreen};
  border-radius: 8px;
  padding: 16px;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 600;
  color: white;
  line-height: 22px;
  cursor: pointer;
  box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
  &:focus {
    background-color: ${(props) => props.theme.colors.textTertiary};
    border: 1px solid ${(props) => props.theme.colors.secondaryGreen}
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.textTertiary};
    border: 1px solid ${(props) => props.theme.colors.textTertiary};
  }
`;

function Button({ disabled, onClick }: ButtonProps) {
  return (
    <ButtonElement disabled={disabled} onClick={onClick}>
      <ConverterIcon />
      Converter
    </ButtonElement>
  )
}

export default Button;
