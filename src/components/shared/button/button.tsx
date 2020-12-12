import React, { FunctionComponent, ReactElement, MouseEvent } from 'react';

import './button.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ type, variant, onClick, children }): ReactElement => {
  const btnClasses = `c-btn c-btn--${variant}`;

  return (
    <button type={type} className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};
