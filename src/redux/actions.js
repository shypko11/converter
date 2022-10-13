import { SET_ALL_CURR } from './types';
import { getData } from '../api/api';

export const getAllList = () => (dispatch) => {
  getData()
    .then((res) => {
      dispatch({
        type: SET_ALL_CURR,
        payload: res.data
      });
    })
    .catch((err) => {
      alert('try reload page');
    });
};
