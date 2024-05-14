import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Input from './Input';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import Button from './Button';

type ExchangeData = {
  USDBRL: {
    ask: string;
    bid: string;
    code: string;
    codein: string;
    create_date: string;
    high: string;
    low: string;
    name: string;
    pctChange: string;
    timestamp: string;
    varBid: string;
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Values = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const fetcher = (url: string) => axios.get(url).then(res => res.data);

function Converter() {
  const [dolar, setDolar] = useState('');
  const [taxaEstado, setTaxaEstado] = useState('');
  const [tipoCompra, setTipoCompra] = useState('Dinheiro');
  const [resultado, setResultado] = useState<number | null>(null);

  const { data, error } = useSWR<ExchangeData>('https://economia.awesomeapi.com.br/last/USD-BRL', fetcher);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'dolar') {
      setDolar(value);
    } else if (name === 'taxaEstado') {
      setTaxaEstado(value);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipoCompra(event.target.value);
  };

  const calcular = () => {
    if (error) {
      alert('Erro ao carregar valor do dólar. Por favor, tente novamente mais tarde.');
      return;
    }
    if (!data || !data.USDBRL) {
      console.log('Aguarde, carregando valor do dólar...');
      return;
    }
    
    const valorDolar = parseFloat(dolar);
    const valorTaxaEstado = parseFloat(taxaEstado);

    const exchangeRate = parseFloat(data.USDBRL.bid);

    if(tipoCompra === 'Dinheiro') {
      setResultado((valorDolar + valorTaxaEstado) * (exchangeRate + 0.011));
    } else if(tipoCompra === 'Cartão'){
      setResultado((valorDolar + valorTaxaEstado + 0.064) * exchangeRate);
    }
  };

  const isButtonDisabled = !dolar || !taxaEstado || !tipoCompra;

  return (
    <Container>
      <Values>
        <Input name="dolar" label="Dólar" type="number" value={dolar} onChange={handleInputChange} />
        <Input name="taxaEstado" label="Taxa do Estado" type="number" value={taxaEstado} onChange={handleInputChange} />
      </Values>
      <RadioButton name="tipo" label="Tipo de compra" type="radio" firstValue="Dinheiro" secondValue="Cartão" selectedValue={tipoCompra}
        onChange={handleRadioChange} />
      <Button disabled={isButtonDisabled} onClick={calcular} />
    </Container>
  )
}

export default Converter;
