import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  position: relative;
`;

const Wrapper = (props) => (
    <MainWrapper>
        {props.children}
    </MainWrapper>
);

export default Wrapper;
