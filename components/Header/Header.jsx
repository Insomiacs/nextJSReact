import React from 'react';
import styled from 'styled-components';

import Logo from '../../sharedComponents/Logo/Logo';
import Wrapper from '../../sharedComponents/Wrapper/Wrapper';
import SearchBar from '../SearchBar';

const HeaderWrapper = styled.div`
  padding: 20px 0;
  background: url("http://brianrood.com/wp-content/uploads/2017/01/cvpntr2_1-1.jpg");
  min-height: 400px;
`;
const Header = () => (
  <HeaderWrapper>
    <Wrapper>
      <Logo />
      <SearchBar />
    </Wrapper>
  </HeaderWrapper>
);

export default Header;
