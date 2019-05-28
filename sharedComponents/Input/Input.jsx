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

const Input = (props) => (
    <StyledInput
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        onKeyUp={(e) => props.submitSearchOnEnter(e)}
    />
);

export default Input;
