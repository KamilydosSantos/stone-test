import React from 'react';
import styled from 'styled-components';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const LabelElement = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
`;

const InputElement = styled.input`
  width: 168px;
  padding: 16px;
  border: solid 1px rgba(215, 224, 235, 1);
  border-radius: 4px;
  box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
  font-family: 'Roboto';
  font-size: 1rem;
  &:focus,
  &:hover {
    outline: solid 1px ${(props) => props.theme.colors.mainGreen};
  }
`;

function Input({label, type, name, value, onChange}: InputProps) {
  return (
    <Container>
      <LabelElement htmlFor={name}>{label}</LabelElement>
      <InputElement type={type} name={name} value={value} onChange={onChange} required />
    </Container>
  )
}

export default Input;
