import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: max-content;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const DateTime = styled.p`
  margin: 0;
  line-height: 2;
`;

const Spacer = styled.span`
  &::before {
    content: "|";
    margin: 0 10px;
  }
`;

function DateTimeDisplay() {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const updateDateTime = () => {
      const now = new Date();

      const day = now.getUTCDate();
      const month = monthNames[now.getUTCMonth()];
      const year = now.getUTCFullYear();
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');

      setCurrentDate(`${day} de ${month} ${year}`);
      setCurrentTime(`${hours}:${minutes}`);
    }

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <DateTime>{currentDate}</DateTime>
      <Spacer />
      <DateTime>{currentTime} UTC</DateTime>
    </Container>
  )
}

export default DateTimeDisplay;
