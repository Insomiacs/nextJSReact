// @flow
import React from 'react';
import { withRouter } from 'next/router';
import { Reset } from 'styled-reset';

import MovieCard from '../components/Movies/MovieCard';
import MoviesContent from '../components/MoviesContent';

const Film = () => (
  <div>
    <Reset />
    <MovieCard />
    <MoviesContent />
  </div>
);

export default withRouter(Film);
