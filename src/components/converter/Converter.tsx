import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Input from './Input';
import styled from 'styled-components';
import RadioButton from './RadioButton';
import Button from './Button';
import Result from '../result/Result';
import Informations from '../result/Informations';
import BackButton from '../result/BackButton';

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
  const [cotacaoDolar, setCotacaoDolar] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const { data, error, isValidating } = useSWR<ExchangeData>('https://economia.awesomeapi.com.br/last/USD-BRL', fetcher);

  useEffect(() => {
    if (data && data.USDBRL) {
      setCotacaoDolar(parseFloat(data.USDBRL.bid));
    }
  }, [data]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'dolar') {
      setDolar(value);
    } else if (name === 'taxaEstado') {
      setTaxaEstado(value.replace(',', '.'));
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
    let resultadoCalculado = 0;

    if (tipoCompra === 'Dinheiro') {
      resultadoCalculado = (valorDolar + valorTaxaEstado) * (cotacaoDolar + 0.011);
    } else if (tipoCompra === 'Cartão') {
      resultadoCalculado = (valorDolar + valorTaxaEstado + 0.064) * cotacaoDolar;
    }

    setResultado(resultadoCalculado);
    setMostrarResultado(true);
  };

  const isButtonDisabled = !dolar || !taxaEstado || !tipoCompra || isValidating;

  return (
    <Container>
      {!mostrarResultado ? (
        <>
          <Values>
            <Input name="dolar" label="Dólar" type="number" value={dolar} onChange={handleInputChange} />
            <Input name="taxaEstado" label="Taxa do Estado" type="number" value={taxaEstado} onChange={handleInputChange} />
          </Values>
          <RadioButton name="tipo" label="Tipo de compra" type="radio" firstValue="Dinheiro" secondValue="Cartão" selectedValue={tipoCompra}
            onChange={handleRadioChange} />
          <Button disabled={isButtonDisabled} onClick={calcular} />
        </>
      ) : (
        <>
          <BackButton onClick={() => setMostrarResultado(false)} />
          <Result result={resultado?.toFixed(2)} />
          <Informations tipoCompra={tipoCompra} taxaEstado={taxaEstado} cotacaoDolar={cotacaoDolar} />
        </>
      )}
    </Container>
  );
}

export default Converter;