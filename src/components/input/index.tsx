import React, { SyntheticEvent } from 'react';

import css from './index.module.css';

type Props = {
  id: string;
  name: string;
  value: number;
  onChange: (e: SyntheticEvent) => void;
};

const Input: React.FC<Props> = ({
  id,
  name,
  value,
  onChange
}) => {
  return (
    <div className={css.root}>
      <p>{name}</p>
      <div className={css.field}>
        <div className={css.inputWrap}>
          <input
            id={id}
            type='number'
            className={css.input}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
