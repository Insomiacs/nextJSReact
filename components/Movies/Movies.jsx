import React, { Fragment } from 'react';

import Movie from './Movie';

const Movies = ({ movies }) => (
  <Fragment>
    {
            movies.length ? movies.map(movie => (
              <Movie
                image={movie.poster_path}
                title={movie.title}
                genres={movie.genres}
                releaseDate={movie.release_date}
                id={movie.id}
                key={movie.id}
              />
            )) : <span>No Films found</span>
        }
  </Fragment>
);

export default Movies;
