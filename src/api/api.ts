import axios from 'axios';

export const getData = () => {
  return axios
    .get(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221012&json'
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};