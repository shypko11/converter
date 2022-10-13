import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../../types';

import css from './index.module.css';
import { getAllList } from './../../redux/actions';

const List: React.FC = () => {
  const dispatch = useDispatch();

  const all = useSelector((state: State) => state?.list);

  useEffect(() => {
    dispatch(getAllList());
  }, [dispatch]);

  return (
    <div className={css.root}>
      <p></p>
      <ul>
        {all.map((el) => {
          return <li>{el.rate + ' UAH - 1 ' + el.cc + ' - ' + el.txt} </li>;
        })}
      </ul>
    </div>
  );
};

export default List;
