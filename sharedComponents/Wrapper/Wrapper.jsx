// @flow
import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  position: relative;
`;

type Props = {
    children?: any
};

const Wrapper = ({ children }: Props ) => (
  <MainWrapper>
    { children }
  </MainWrapper>
);

export default Wrapper;
