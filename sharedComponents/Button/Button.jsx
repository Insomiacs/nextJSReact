// @flow
import React from 'react';

type Props = {
    onClick: (e: Object) => void,
    children?: any
}
const Button = ({ onClick, children }: Props) => (
  <button
    onClick={onClick}
  >
    { children }
  </button>
);

export default Button;
