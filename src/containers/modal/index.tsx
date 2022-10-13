import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Input from './../../components/input/index';
import Button from '../../components/button';
import Select from '../../components/select';

import { getData } from '../../api/api';

import css from './index.module.css';

type Props = {
  title: string;
};

const Modal: React.FC<Props> = ({ title }) => {
  const [firstVal, setFirstVal] = useState(100);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [result, setResult] = useState(0);
  const [allCurrency, setAllCurrency] = useState<null | Array<any>>(null);
  const [options, setOptions] = useState<Array<any>>();

  const navigate = useNavigate();

  useEffect(() => {
    getData().then((data) => {
      setAllCurrency(data);
    });
  }, []);

  useEffect(() => {
    const opts = allCurrency?.map((curr) => {
      return { value: curr.cc, name: curr.cc + ' - ' + curr.txt };
    });
    setOptions(opts);
  }, [allCurrency]);

  useEffect(() => {
    const elem = allCurrency?.find((el) => el?.cc === selectedCurrency);
    elem && setResult(firstVal * elem?.rate);
  }, [firstVal, selectedCurrency, allCurrency]);

  const onChangeVal = (e: BaseSyntheticEvent) => {
    const newVal = e?.target?.value;
    setFirstVal(newVal);
  };

  const onChangeCurr = (e: BaseSyntheticEvent) => {
    const newVal = e?.target?.value;
    setSelectedCurrency(newVal);
  };

  return (
    <div className={css.root}>
      <h2 className={css.title}>{title}</h2>
      <Input
        id='usd'
        name='Value in UAH'
        value={firstVal}
        onChange={onChangeVal}
      />
      <Select
        id='select'
        value={selectedCurrency}
        onChange={onChangeCurr}
        options={options}
      />
      <div className={css.result}>
        <p className={css.resultTitle}>result</p>
        <p>{result.toFixed(2)}</p>
      </div>
      <Button
        onClick={() => {
          navigate('/all');
        }}
      />
    </div>
  );
};

export default Modal;
