import axios from 'axios';

export const getData = () => {
  return axios.get(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221012&json'
  );
};
