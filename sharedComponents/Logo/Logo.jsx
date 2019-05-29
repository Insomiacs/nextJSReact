// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MainLogo = styled.div`
  color: #9b1f12;
  text-decoration: none;
  font-weight: 600;
`;

const Logo = () => (
  <Link
    href="/"
  >
    <MainLogo>
      <a>netflixroulette</a>
    </MainLogo>
  </Link>
);

export default Logo;
