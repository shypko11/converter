import React from 'react';

import css from './index.module.css';

type Props = {
  title?: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ title = 'Show all', onClick }) => {
  return (
    <div className={css.root} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
