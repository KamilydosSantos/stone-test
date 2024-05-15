import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  name: string;
  label: string;
  firstValue: string;
  secondValue: string;
  selectedValue: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const LabelElement = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
`;

const RadioButtonElement = styled.input`
  display: none;

  &:checked + span {
    border-color: ${(props) => props.theme.colors.secondaryGreen};
  }

  &:checked + span::before {
    transform: scale(1);
  }
`;

const CustomRadioButton = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => props.theme.colors.textTertiary};
  border-radius: 100%;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;

  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.secondaryGreen};
    position: absolute;
    top: 5px;
    left: 5px;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.1s;
  }
`;

function RadioButton({ name, label, type, firstValue, secondValue, selectedValue, onChange }: RadioButtonProps) {
  return (
    <Container>
      <LabelElement>{label}</LabelElement>
      <RadioGroup>
        <RadioButtonLabel>
          <RadioButtonElement name={name} type={type} value={firstValue} id={`${name}-${firstValue}`} checked={selectedValue === firstValue} onChange={onChange} />
          <CustomRadioButton />
          <span>{firstValue}</span>
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButtonElement name={name} type={type} value={secondValue} id={`${name}-${secondValue}`}checked={selectedValue === secondValue} onChange={onChange} />
          <CustomRadioButton />
          <span>{secondValue}</span>
        </RadioButtonLabel>
      </RadioGroup>
    </Container>
  );
}

export default RadioButton;