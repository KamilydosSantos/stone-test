import React from 'react';
import styled from 'styled-components';

interface InformationsProps {
  tipoCompra: string;
  taxaEstado: string;
  cotacaoDolar: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const InformationElement = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  & span {
    font-weight: 400;
  }
`;

function Informations({ tipoCompra, taxaEstado, cotacaoDolar }: InformationsProps) {
  return (
    <Container>
      <InformationElement>Compra no {tipoCompra} e taxa de <span>{taxaEstado}%</span></InformationElement>
      <InformationElement>Cotação do dólar: <span>$1,00 = R${cotacaoDolar.toFixed(2).replace('.', ',')}</span></InformationElement>
    </Container>
  )
}

export default Informations;