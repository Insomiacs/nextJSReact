// @flow
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 50px;
    outline: none;
    width: 100%;
    background: #474747;
    border: none;
    color: #ffffff;
    padding: 0 20px;
`;

type Props = {
    value: string,
    onChange: (e: Object) => void,
    submitSearchOnEnter: (e: Object) => void
}

const Input = ({ value, onChange, submitSearchOnEnter }: Props) => (
  <StyledInput
    type="text"
    value={value}
    onChange={e => onChange(e)}
    onKeyUp={e => submitSearchOnEnter(e)}
  />
);

export default Input;
