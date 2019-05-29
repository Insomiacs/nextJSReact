// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Reset } from 'styled-reset';

import Header from '../components/Header';
import MoviesContent from '../components/MoviesContent';

const Index = () => (
  <React.Fragment>
    <Reset />
    <Header />
    <MoviesContent />
  </React.Fragment>
);

const mapStateToProps = state => state;

export default connect<Object, *, *, *, *, *>(mapStateToProps)(Index);
