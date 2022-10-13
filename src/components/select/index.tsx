import React, { SyntheticEvent } from 'react';

import css from './index.module.css';
type Option = {
  name: string;
  value: string;
};

type Props = {
  id: string;
  value: string;
  onChange: (e: SyntheticEvent) => void;
  name?: string;
  options?: Array<Option>;
};

const Select: React.FC<Props> = ({
  id,
  name = 'convert to',
  options = [],
  value,
  onChange
}) => {
  return (
    <div className={css.root}>
      <p>{name}</p>
      <div className={css.field}>
        <div className={css.inputWrap}>
          <select
            id={id}
            className={css.input}
            value={value}
            onChange={onChange}
          >
            {options.map((op) => {
              return (
                <option key={op.value} value={op.value}>
                  {op.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
