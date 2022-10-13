type OneCurr = {
  cc: string;
  exchangedate: string;
  r030: number;
  rate: number;
  txt: string;
};
export type State = {
  list: Array<OneCurr>;
};
